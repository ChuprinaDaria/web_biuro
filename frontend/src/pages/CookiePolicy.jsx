import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-accent py-16">
      <div className="container-custom px-4 md:px-8 max-w-4xl">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Powrót do strony głównej
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-secondary mb-8">
            Polityka Cookies
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                1. Czym są pliki cookies?
              </h2>
              <p>
                Pliki cookies (tzw. "ciasteczka") to małe pliki tekstowe zapisywane na
                urządzeniu użytkownika (komputerze, tablecie, smartfonie) podczas przeglądania
                stron internetowych. Cookies zawierają informacje niezbędne do prawidłowego
                funkcjonowania witryny oraz pomagają zapamiętać preferencje użytkownika.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                2. Jakie cookies wykorzystujemy?
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    Cookies niezbędne (techniczne)
                  </h3>
                  <p>
                    Te pliki są niezbędne do prawidłowego działania strony internetowej.
                    Pozwalają na poruszanie się po stronie i korzystanie z jej funkcji.
                    Bez tych plików niektóre usługi nie mogą być świadczone.
                  </p>
                  <p className="mt-2 text-sm italic">
                    Czas przechowywania: Sesja lub do 12 miesięcy
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    Cookies funkcjonalne
                  </h3>
                  <p>
                    Umożliwiają zapamiętanie wyborów dokonanych przez użytkownika (np. język,
                    region) i dostarczają ulepszone, bardziej spersonalizowane funkcje.
                    Mogą być również używane do dostarczania usług wymaganych przez użytkownika.
                  </p>
                  <p className="mt-2 text-sm italic">
                    Czas przechowywania: Do 12 miesięcy
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    Cookies analityczne
                  </h3>
                  <p>
                    Pozwalają nam zrozumieć, w jaki sposób użytkownicy korzystają z naszej
                    strony. Zbierają informacje o tym, które strony są najczęściej odwiedzane,
                    czy pojawiają się komunikaty o błędach itp. Wszystkie informacje zbierane
                    przez te cookies są agregowane i anonimowe.
                  </p>
                  <p className="mt-2 text-sm italic">
                    Czas przechowywania: Do 24 miesięcy
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    Cookies marketingowe
                  </h3>
                  <p>
                    Służą do śledzenia użytkowników na stronach internetowych. Ich celem jest
                    wyświetlanie reklam, które są istotne i interesujące dla poszczególnych
                    użytkowników.
                  </p>
                  <p className="mt-2 text-sm italic">
                    Czas przechowywania: Do 24 miesięcy
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                3. Szczegółowa lista cookies
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 p-3 text-left">Nazwa</th>
                      <th className="border border-gray-300 p-3 text-left">Typ</th>
                      <th className="border border-gray-300 p-3 text-left">Cel</th>
                      <th className="border border-gray-300 p-3 text-left">Ważność</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">cookie_consent</td>
                      <td className="border border-gray-300 p-3">Niezbędne</td>
                      <td className="border border-gray-300 p-3">
                        Zapamiętuje wybór użytkownika dot. cookies
                      </td>
                      <td className="border border-gray-300 p-3">12 miesięcy</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">session_id</td>
                      <td className="border border-gray-300 p-3">Niezbędne</td>
                      <td className="border border-gray-300 p-3">Identyfikacja sesji użytkownika</td>
                      <td className="border border-gray-300 p-3">Sesja</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">_ga</td>
                      <td className="border border-gray-300 p-3">Analityczne</td>
                      <td className="border border-gray-300 p-3">Google Analytics - analiza ruchu</td>
                      <td className="border border-gray-300 p-3">24 miesiące</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">_gid</td>
                      <td className="border border-gray-300 p-3">Analityczne</td>
                      <td className="border border-gray-300 p-3">Google Analytics - analiza ruchu</td>
                      <td className="border border-gray-300 p-3">24 godziny</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                4. Jak zarządzać plikami cookies?
              </h2>
              <p className="mb-3">
                Możesz w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej
                przeglądarce internetowej. Możesz również usunąć pliki cookies, które zostały
                już zapisane na Twoim urządzeniu.
              </p>

              <div className="space-y-3 mt-4">
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Google Chrome</h4>
                  <p className="text-sm">
                    Menu &gt; Ustawienia &gt; Prywatność i bezpieczeństwo &gt; Pliki cookie
                    i inne dane witryn
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary mb-2">Mozilla Firefox</h4>
                  <p className="text-sm">
                    Menu &gt; Opcje &gt; Prywatność i bezpieczeństwo &gt; Ciasteczka i dane
                    stron
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary mb-2">Microsoft Edge</h4>
                  <p className="text-sm">
                    Menu &gt; Ustawienia &gt; Pliki cookie i uprawnienia witryny &gt; Zarządzaj
                    plikami cookie i danymi witryn i usuń je
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary mb-2">Safari</h4>
                  <p className="text-sm">
                    Preferencje &gt; Prywatność &gt; Zarządzaj danymi stron internetowych
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-600">
                Uwaga: Zablokowanie wszystkich plików cookies może wpłynąć na prawidłowe
                funkcjonowanie niektórych elementów strony internetowej.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                5. Pliki cookies stron trzecich
              </h2>
              <p>
                Nasza strona może zawierać linki do zewnętrznych serwisów społecznościowych
                (np. Facebook, LinkedIn) oraz narzędzi analitycznych (np. Google Analytics).
                Te serwisy mogą wykorzystywać własne pliki cookies, nad którymi nie mamy
                kontroli. Zalecamy zapoznanie się z politykami prywatności tych serwisów.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                6. Zgoda na wykorzystanie cookies
              </h2>
              <p>
                Przy pierwszej wizycie na naszej stronie wyświetlany jest baner informujący
                o wykorzystaniu plików cookies. Kontynuując przeglądanie strony lub klikając
                "Akceptuję", wyrażasz zgodę na wykorzystanie plików cookies zgodnie z
                niniejszą polityką.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                7. Kontakt
              </h2>
              <p>
                W razie pytań dotyczących naszej Polityki Cookies, prosimy o kontakt pod
                adresem email: biuro@atbalance.pl lub telefonicznie: +48 453 516 366.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                8. Zmiany w Polityce Cookies
              </h2>
              <p>
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Cookies.
                Aktualna wersja polityki jest zawsze dostępna na tej stronie. Zalecamy
                okresowe sprawdzanie treści tej polityki.
              </p>
            </section>

            <section className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Ostatnia aktualizacja:</strong> {new Date().toLocaleDateString('pl-PL')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
