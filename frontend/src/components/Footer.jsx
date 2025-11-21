import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">ATBalance</h3>
            <p className="text-gray-300 mb-4">
              Profesjonalne usługi księgowe dla małych i średnich przedsiębiorstw.
              Doświadczenie, terminowość, zaufanie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-primary transition-colors">
                  Strona główna
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors">
                  O nas
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Usługi
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary" />
                <a href="tel:+48453516366" className="text-gray-300 hover:text-primary transition-colors">
                  +48 453 516 366
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary" />
                <a href="mailto:biuro@atbalance.pl" className="text-gray-300 hover:text-primary transition-colors">
                  biuro@atbalance.pl
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-gray-300">Warszawa, Polska</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Biuro Rachunkowe ATBalance. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6 text-sm">
              <RouterLink to="/polityka-prywatnosci" className="text-gray-400 hover:text-primary transition-colors">
                Polityka Prywatności
              </RouterLink>
              <RouterLink to="/polityka-cookies" className="text-gray-400 hover:text-primary transition-colors">
                Polityka Cookies
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
