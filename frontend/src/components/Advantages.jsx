import { FaMedal, FaUserCheck, FaCalendarCheck, FaTag } from 'react-icons/fa';

const Advantages = () => {
  const advantages = [
    {
      icon: <FaMedal className="text-5xl" />,
      title: '15+ lat doświadczenia na rynku',
      description: 'Posiadamy bogate doświadczenie w obsłudze księgowej firm z różnych branż. Znamy specyfikę różnych rodzajów działalności.',
    },
    {
      icon: <FaUserCheck className="text-5xl" />,
      title: 'Indywidualne podejście do każdego klienta',
      description: 'Każda firma jest inna, dlatego dostosowujemy nasze usługi do Twoich potrzeb. Zapewniamy dedykowanego opiekuna.',
    },
    {
      icon: <FaCalendarCheck className="text-5xl" />,
      title: 'Terminowe rozliczenia',
      description: 'Gwarantujemy terminowość w wykonywaniu wszystkich rozliczeń i sprawozdań. Możesz na nas polegać.',
    },
    {
      icon: <FaTag className="text-5xl" />,
      title: 'Konkurencyjne ceny',
      description: 'Oferujemy atrakcyjne ceny przy zachowaniu najwyższej jakości usług. Transparentny cennik bez ukrytych opłat.',
    },
  ];

  return (
    <section id="advantages" className="section-padding bg-gradient-to-br from-secondary to-gray-800 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dlaczego My?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Wybierz doświadczenie, profesjonalizm i pewność terminowych rozliczeń
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-primary mb-6">{advantage.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{advantage.title}</h3>
              <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 border-t border-white/20 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Bezpieczeństwo</div>
              <p className="text-gray-300">Twoje dane są u nas bezpieczne</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Zaufanie</div>
              <p className="text-gray-300">Setki zadowolonych klientów</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Wsparcie</div>
              <p className="text-gray-300">Zawsze gotowi do pomocy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
