import { Link } from 'react-router-dom';
import { Wrench, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent rounded-lg">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">IGLEN</h3>
                <p className="text-sm text-gray-300">Martyna i Paweł Śliwa</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Profesjonalna mechanika pojazdowa i serwis klimatyzacji. 25 lat doświadczenia w branży.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Nawigacja</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Start
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Usługi
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  O Nas
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Polityka Prywatności
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+48695730700" className="text-gray-300 hover:text-accent transition-colors block">
                    695 730 700
                  </a>
                  <a href="tel:+48603474139" className="text-gray-300 hover:text-accent transition-colors block">
                    603 474 139
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:iglen.zator@gmail.com"
                  className="text-gray-300 hover:text-accent transition-colors break-all"
                >
                  iglen.zator@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  ul. Krakowska 30<br />
                  32-640 Palczowice
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Godziny Otwarcia</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>Poniedziałek - Piątek</span>
                <span className="font-semibold">9:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sobota</span>
                <span className="font-semibold">9:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Niedziela</span>
                <span className="font-semibold">Zamknięte</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-300">
                <span className="font-semibold">NIP:</span> 549-225-7924
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300 text-center md:text-left">
              &copy; {currentYear} IGLEN Mechanika Pojazdowa. Wszelkie prawa zastrzeżone.
            </p>
            <p className="text-sm text-gray-300">
              Martyna Śliwa - ul. Krakowska 30, 32-640 Palczowice
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
