import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wrench } from 'lucide-react';
import { useService } from '../context/ServiceContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { serviceType, setServiceType } = useService();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const handleServiceClick = (service: 'mechanics' | 'ac') => {
    setServiceType(service);
    if (location.pathname !== '/') {
      window.location.href = '/#services';
      return;
    }
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Start', id: 'hero', serviceType: null },
    { name: 'Mechanika', id: 'services', serviceType: 'mechanics' as const },
    { name: 'Klimatyzacja', id: 'services', serviceType: 'ac' as const },
    { name: 'O Nas', id: 'about', serviceType: null },
    { name: 'Kontakt', id: 'contact', serviceType: null },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg transition-colors ${
                serviceType === 'mechanics'
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-white'
              }`}
            >
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h1
                className={`text-xl font-bold transition-colors ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                IGLEN
              </h1>
              <p
                className={`text-xs transition-colors ${
                  isScrolled ? 'text-muted' : 'text-gray-200'
                }`}
              >
                Martyna i Paweł Śliwa
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() =>
                  link.serviceType
                    ? handleServiceClick(link.serviceType)
                    : scrollToSection(link.id)
                }
                className={`font-medium transition-colors hover:text-accent ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:+48695730700"
              className="bg-accent text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Zadzwoń: 695 730 700
            </a>
          </div>

          <button
            className={`md:hidden p-2 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() =>
                  link.serviceType
                    ? handleServiceClick(link.serviceType)
                    : scrollToSection(link.id)
                }
                className="block w-full text-left font-medium text-primary hover:text-accent transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:+48695730700"
              className="block w-full text-center bg-accent text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Zadzwoń: 695 730 700
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
