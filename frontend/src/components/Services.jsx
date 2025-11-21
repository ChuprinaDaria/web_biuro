import { FaBook, FaCalculator, FaFileInvoice, FaChartLine, FaClipboardList, FaUsers, FaComments, FaMoneyCheckAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaBook className="text-4xl" />,
      title: 'Podatkowa księga przychodów i rozchodów',
      description: 'Prowadzenie podatkowej księgi przychodów oraz rozchodów zgodnie z obowiązującymi przepisami.',
    },
    {
      icon: <FaCalculator className="text-4xl" />,
      title: 'Pełna księgowość',
      description: 'Kompleksowe prowadzenie pełnych ksiąg rachunkowych dla firm.',
    },
    {
      icon: <FaMoneyCheckAlt className="text-4xl" />,
      title: 'Ryczałt ewidencjonowany',
      description: 'Obsługa firm rozliczających się ryczałtem ewidencjonowanym.',
    },
    {
      icon: <FaFileInvoice className="text-4xl" />,
      title: 'Deklaracje podatkowe',
      description: 'Sporządzenie deklaracji podatkowych: PIT, CIT, VAT oraz innych rozliczeń.',
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: 'Sprawozdania GUS',
      description: 'Przygotowanie i wysyłka sprawozdań do Głównego Urzędu Statystycznego.',
    },
    {
      icon: <FaClipboardList className="text-4xl" />,
      title: 'Deklaracje ZUS',
      description: 'Deklaracje i raporty ZUS, kompleksowe rozliczenia z ZUS.',
    },
    {
      icon: <FaComments className="text-4xl" />,
      title: 'Konsultacje podatkowe',
      description: 'Profesjonalne doradztwo i konsultacje w sprawach podatkowych.',
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Kadry i płace',
      description: 'Pełna obsługa kadrowo-płacowa dla Twojej firmy.',
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group hover:bg-primary transition-all duration-300"
            >
              <div className="text-primary group-hover:text-white transition-colors duration-300 mb-4">
                {service.icon}
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
