import { useState, useEffect } from 'react';
import { FaBook, FaCalculator, FaFileInvoice, FaChartLine, FaClipboardList, FaUsers, FaComments, FaMoneyCheckAlt } from 'react-icons/fa';
import * as ReactIcons from 'react-icons/fa';
import { apiService } from '../services/api';

// Icon mapping for services
const iconMap = {
  FaBook, FaCalculator, FaFileInvoice, FaChartLine,
  FaClipboardList, FaUsers, FaComments, FaMoneyCheckAlt,
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await apiService.getServices();
        // Filter only active services and sort by order
        const activeServices = (data || [])
          .filter(service => service.is_active !== false)
          .sort((a, b) => (a.order || 0) - (b.order || 0));
        setServices(activeServices);
      } catch (error) {
        console.error('Error loading services:', error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || ReactIcons[iconName] || FaBook;
    return <IconComponent className="text-4xl" />;
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Nasze Usługi
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferujemy kompleksową obsługę księgową dostosowaną do potrzeb Twojej firmy
          </p>
        </div>

        {loading ? (
          <div className="text-center text-gray-600">Ładowanie usług...</div>
        ) : services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="card group hover:bg-primary transition-all duration-300"
              >
                <div className="text-primary group-hover:text-white transition-colors duration-300 mb-4">
                  {renderIcon(service.icon)}
                </div>
                <h3 className="text-xl font-semibold text-secondary group-hover:text-white transition-colors duration-300 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">Brak dostępnych usług</div>
        )}

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Nie znalazłeś usługi, której szukasz? Skontaktuj się z nami!
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Zapytaj o ofertę
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
