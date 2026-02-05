import { motion } from 'framer-motion';
import { Wrench, Wind } from 'lucide-react';
import { useService } from '../context/ServiceContext';

export function Hero() {
  const { serviceType, setServiceType } = useService();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        key={serviceType}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 z-10" />
        <img
          src={
            serviceType === 'mechanics'
              ? 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              : 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2000&q=80'
          }
          alt={serviceType === 'mechanics' ? 'Mechanika' : 'Klimatyzacja'}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex bg-white/10 backdrop-blur-md rounded-2xl p-2 mb-12 shadow-2xl border border-white/20">
          <button
            onClick={() => setServiceType('mechanics')}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              serviceType === 'mechanics'
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Wrench className="w-6 h-6" />
            Mechanika
          </button>
          <button
            onClick={() => setServiceType('ac')}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              serviceType === 'ac'
                ? 'bg-secondary text-white shadow-lg scale-105'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Wind className="w-6 h-6" />
            Klimatyzacja
          </button>
        </div>

        <motion.div
          key={serviceType + '-content'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Tytuł z zabezpieczeniem przed ucinaniem */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight break-words">
            {serviceType === 'mechanics' ? (
              <>
                Twój Samochód w Rękach<br />
                <span className="text-red-500">Fachowców</span>
              </>
            ) : (
              <>
                Profesjonalny Serwis<br />
                <span className="text-sky-400">Klimatyzacji</span>
              </>
            )}
          </h1>

          {/* POPRAWKA TUTAJ: Dodane px-4 oraz zmiana text-xl na text-lg dla mobile */}
          <p className="text-lg sm:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            {serviceType === 'mechanics'
              ? 'Kompleksowa mechanika pojazdowa. Naprawiamy to, czego inni nie potrafią. 25 lat doświadczenia.'
              : 'Pełny serwis, odgrzybianie i naprawa układów. Zadbaj o świeże powietrze i komfort podróży.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-accent text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-red-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Umów Wizytę
            </button>
            <a
              href="tel:+48695730700"
              className="bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/30 transition-all border-2 border-white/40"
            >
              695 730 700
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Przewiń w dół</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
