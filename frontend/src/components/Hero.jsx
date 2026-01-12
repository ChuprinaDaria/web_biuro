import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';
import { apiService } from '../services/api';

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const data = await apiService.getHero();
        setHeroData(data);
      } catch (error) {
        console.error('Error loading hero data:', error);
        // Fallback to default data
        setHeroData({
          title: 'Profesjonalne Usługi Księgowe',
          subtitle: 'Zajmiemy się Twoją księgowością - Ty zajmij się rozwojem firmy. Doświadczenie, terminowość i indywidualne podejście.',
          cta_text: 'Skontaktuj się z nami',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  if (loading) {
    return (
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-gray-800 to-primary overflow-hidden"
      >
        <div className="text-white text-xl">Ładowanie...</div>
      </section>
    );
  }

  const heroImageStyle = heroData?.hero_image
    ? { backgroundImage: `url(${heroData.hero_image})` }
    : {};

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-gray-800 to-primary overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      {/* Hero Image Background */}
      {heroData?.hero_image && (
        <div className="absolute inset-0 opacity-20" style={heroImageStyle}>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-gray-800 to-primary"></div>
        </div>
      )}

      {/* Content */}
      <div className="container-custom px-4 md:px-8 z-10">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            {heroData?.title || 'Profesjonalne Usługi Księgowe'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            {heroData?.subtitle || 'Zajmiemy się Twoją księgowością - Ty zajmij się rozwojem firmy. Doświadczenie, terminowość i indywidualne podejście.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="btn-primary cursor-pointer"
            >
              {heroData?.cta_text || 'Skontaktuj się z nami'}
            </Link>
            <Link
              to="services"
              smooth={true}
              offset={-80}
              duration={500}
              className="btn-secondary cursor-pointer text-white border-white hover:bg-white hover:text-secondary"
            >
              Poznaj nasze usługi
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-200">Lat doświadczenia</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-200">Zadowolonych klientów</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-200">Terminowość</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <Link
        to="about"
        smooth={true}
        offset={-80}
        duration={500}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      >
        <FaChevronDown className="text-white text-3xl" />
      </Link>
    </section>
  );
};

export default Hero;
