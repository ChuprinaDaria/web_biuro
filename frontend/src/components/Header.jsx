import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Strona główna', to: 'hero' },
    { name: 'O nas', to: 'about' },
    { name: 'Usługi', to: 'services' },
    { name: 'Dlaczego my', to: 'advantages' },
    { name: 'Kontakt', to: 'contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              ATBalance
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`cursor-pointer font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current transition-all ${
                  isScrolled ? 'text-secondary' : 'text-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-current transition-all ${
                  isScrolled ? 'text-secondary' : 'text-white'
                } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-current transition-all ${
                  isScrolled ? 'text-secondary' : 'text-white'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-2xl font-medium text-secondary hover:text-primary cursor-pointer transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
