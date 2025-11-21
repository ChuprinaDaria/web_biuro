import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCookie } from 'react-icons/fa';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Показываем баннер через небольшую задержку для лучшего UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined');
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-secondary text-white shadow-2xl">
        <div className="container-custom px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <FaCookie className="text-primary text-3xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Ta strona wykorzystuje pliki cookies
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Używamy plików cookies, aby zapewnić najlepszą jakość korzystania z naszej
                  strony internetowej. Klikając "Akceptuję wszystkie", wyrażasz zgodę na
                  wykorzystanie wszystkich plików cookies. Możesz również dostosować swoje
                  preferencje.{' '}
                  <Link
                    to="/polityka-cookies"
                    className="text-primary hover:underline font-medium"
                  >
                    Dowiedz się więcej
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={declineCookies}
                className="btn-secondary text-white border-white hover:bg-white hover:text-secondary px-6 py-2 text-sm whitespace-nowrap"
              >
                Odrzuć
              </button>
              <button
                onClick={acceptCookies}
                className="btn-primary px-6 py-2 text-sm whitespace-nowrap"
              >
                Akceptuję wszystkie
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
