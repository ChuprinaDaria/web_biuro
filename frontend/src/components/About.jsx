import { useState, useEffect } from 'react';
import { FaCheckCircle, FaHandshake, FaClock, FaTrophy } from 'react-icons/fa';
import { apiService } from '../services/api';

// Icon mapping for values
const iconMap = {
  FaTrophy: FaTrophy,
  FaCheckCircle: FaCheckCircle,
  FaHandshake: FaHandshake,
  FaClock: FaClock,
};

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.getAbout();
        setAboutData(data);
        setValues(data.values || []);
      } catch (error) {
        console.error('Error loading about data:', error);
        // Fallback to default data
        setAboutData({
          title: 'O Biurze ATBalance',
          description: 'Biuro Rachunkowe ATBalance to zespół doświadczonych specjalistów, którzy od ponad 15 lat świadczą kompleksowe usługi księgowe dla małych i średnich przedsiębiorstw.',
        });
        setValues([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section id="about" className="section-padding bg-accent">
        <div className="container-custom text-center">
          <div className="text-gray-600">Ładowanie...</div>
        </div>
      </section>
    );
  }

  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || FaTrophy;
    return <IconComponent className="text-4xl text-primary" />;
  };

  return (
    <section id="about" className="section-padding bg-accent">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {aboutData?.title || 'O Biurze ATBalance'}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {aboutData?.description || 'Biuro Rachunkowe ATBalance to zespół doświadczonych specjalistów, którzy od ponad 15 lat świadczą kompleksowe usługi księgowe dla małych i średnich przedsiębiorstw.'}
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.length > 0 ? (
              values.map((value, index) => (
                <div
                  key={value.id || index}
                  className="card text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {renderIcon(value.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))
            ) : (
              // Fallback values if API doesn't return any
              [
                { icon: 'FaTrophy', title: 'Doświadczenie', description: 'Ponad 15 lat na rynku usług księgowych' },
                { icon: 'FaCheckCircle', title: 'Profesjonalizm', description: 'Wykwalifikowany zespół specjalistów' },
                { icon: 'FaHandshake', title: 'Indywidualne podejście', description: 'Dostosowujemy usługi do potrzeb klienta' },
                { icon: 'FaClock', title: 'Terminowość', description: 'Zawsze na czas, bez opóźnień' },
              ].map((value, index) => (
                <div
                  key={index}
                  className="card text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {renderIcon(value.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
