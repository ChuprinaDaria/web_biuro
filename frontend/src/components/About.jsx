import { FaCheckCircle, FaHandshake, FaClock, FaTrophy } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaTrophy className="text-4xl text-primary" />,
      title: 'Doświadczenie',
      description: 'Ponad 15 lat na rynku usług księgowych',
    },
    {
      icon: <FaCheckCircle className="text-4xl text-primary" />,
      title: 'Profesjonalizm',
      description: 'Wykwalifikowany zespół specjalistów',
    },
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: 'Indywidualne podejście',
      description: 'Dostosowujemy usługi do potrzeb klienta',
    },
    {
      icon: <FaClock className="text-4xl text-primary" />,
      title: 'Terminowość',
      description: 'Zawsze na czas, bez opóźnień',
    },
  ];

  return (
    <section id="about" className="section-padding bg-accent">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            O Biurze ATBalance
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Biuro Rachunkowe ATBalance to zespół doświadczonych specjalistów, którzy od ponad 15 lat
              świadczą kompleksowe usługi księgowe dla małych i średnich przedsiębiorstw.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Oferujemy indywidualne podejście, terminowość i pełne zaangażowanie w rozwój biznesu
              naszych klientów. Dzięki naszemu doświadczeniu i profesjonalizmowi możesz skupić się
              na rozwijaniu swojej firmy, a my zajmiemy się jej księgowością.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Naszym celem jest zapewnienie najwyższej jakości usług księgowych oraz budowanie
              długotrwałych relacji opartych na zaufaniu i wzajemnym szacunku.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="card text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
