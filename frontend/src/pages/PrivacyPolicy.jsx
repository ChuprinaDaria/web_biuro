import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const PrivacyPolicy = () => {
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
            Polityka Prywatności
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                1. Administrator danych osobowych
              </h2>
              <p>
                Administratorem Państwa danych osobowych jest Biuro Rachunkowe ATBalance,
                z siedzibą w Warszawie, Polska. Kontakt z administratorem możliwy jest pod
                adresem email: biuro@atbalance.pl oraz numerem telefonu: +48 453 516 366.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                2. Zakres zbieranych danych
              </h2>
              <p className="mb-3">
                Zbieramy następujące kategorie danych osobowych:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Imię i nazwisko</li>
                <li>Adres email</li>
                <li>Numer telefonu (opcjonalnie)</li>
                <li>Treść wiadomości wysłanej przez formularz kontaktowy</li>
                <li>Adres IP (automatycznie zbierany podczas korzystania z serwisu)</li>
                <li>Dane dotyczące korzystania z witryny (pliki cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                3. Cel przetwarzania danych
              </h2>
              <p className="mb-3">Państwa dane osobowe przetwarzamy w następujących celach:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Odpowiedzi na zapytania przesłane przez formularz kontaktowy</li>
                <li>Świadczenia usług księgowych zgodnie z zawartą umową</li>
                <li>Prowadzenia korespondencji handlowej</li>
                <li>Realizacji obowiązków prawnych administratora</li>
                <li>Dochodzenia roszczeń i obrony przed roszczeniami</li>
                <li>Analizy statystycznej i poprawy funkcjonalności strony</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                4. Podstawa prawna przetwarzania
              </h2>
              <p className="mb-3">Podstawą prawną przetwarzania Państwa danych są:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Art. 6 ust. 1 lit. a RODO - zgoda osoby, której dane dotyczą (formularz kontaktowy)
                </li>
                <li>
                  Art. 6 ust. 1 lit. b RODO - niezbędność do wykonania umowy
                </li>
                <li>
                  Art. 6 ust. 1 lit. c RODO - wypełnienie obowiązku prawnego
                </li>
                <li>
                  Art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes administratora
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                5. Okres przechowywania danych
              </h2>
              <p>
                Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów,
                dla których zostały zebrane, tj. do czasu:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Wycofania zgody (w przypadku zgody jako podstawy przetwarzania)</li>
                <li>Zakończenia świadczenia usług i rozliczenia wszystkich zobowiązań</li>
                <li>Przedawnienia roszczeń wynikających z umowy</li>
                <li>Wygaśnięcia obowiązków wynikających z przepisów prawa</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                6. Odbiorcy danych
              </h2>
              <p className="mb-3">
                Państwa dane osobowe mogą być przekazywane następującym kategoriom odbiorców:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Podmioty świadczące usługi hostingowe</li>
                <li>Podmioty świadczące usługi IT i wsparcia technicznego</li>
                <li>Podmioty świadczące usługi płatnicze i bankowe</li>
                <li>
                  Organy publiczne i inne podmioty upoważnione na podstawie przepisów prawa
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                7. Prawa osoby, której dane dotyczą
              </h2>
              <p className="mb-3">Przysługują Państwu następujące prawa:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prawo dostępu do swoich danych osobowych</li>
                <li>Prawo do sprostowania danych</li>
                <li>Prawo do usunięcia danych ("prawo do bycia zapomnianym")</li>
                <li>Prawo do ograniczenia przetwarzania</li>
                <li>Prawo do przenoszenia danych</li>
                <li>Prawo do sprzeciwu wobec przetwarzania</li>
                <li>Prawo do cofnięcia zgody w dowolnym momencie</li>
                <li>Prawo do wniesienia skargi do organu nadzorczego (UODO)</li>
              </ul>
              <p className="mt-3">
                W celu realizacji powyższych praw prosimy o kontakt pod adresem: biuro@atbalance.pl
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                8. Bezpieczeństwo danych
              </h2>
              <p>
                Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające ochronę
                przetwarzanych danych osobowych, w szczególności zabezpieczamy dane przed ich
                udostępnieniem osobom nieupoważnionym, utratą, zniszczeniem lub nieuprawnioną modyfikacją.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                9. Informacje o plikach cookies
              </h2>
              <p>
                Nasza strona internetowa wykorzystuje pliki cookies. Szczegółowe informacje
                na temat wykorzystywanych plików cookies znajdują się w{' '}
                <Link to="/polityka-cookies" className="text-primary hover:underline">
                  Polityce Cookies
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                10. Zmiany w Polityce Prywatności
              </h2>
              <p>
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności.
                O wszelkich zmianach będziemy informować poprzez publikację nowej wersji na
                naszej stronie internetowej.
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

export default PrivacyPolicy;
