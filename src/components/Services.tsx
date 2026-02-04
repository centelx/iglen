import { motion, AnimatePresence } from 'framer-motion';
import {
  Wrench,
  Gauge,
  Droplet,
  Fan,
  Wind,
  Filter,
  Sparkles,
  Settings,
  Zap,
  CheckCircle,
  Cpu,
  Cog,
} from 'lucide-react';
import { useService } from '../context/ServiceContext';

const mechanicsServices = [
  { icon: Cog, title: 'Remonty silników', description: 'Kompleksowe naprawy i regeneracja' },
  { icon: Cpu, title: 'Diagnostyka komputerowa', description: 'Nowoczesny sprzęt diagnostyczny' },
  { icon: Droplet, title: 'Regeneracja wtrysków paliwa', description: 'Profesjonalne czyszczenie i naprawa' },
  { icon: Zap, title: 'Regeneracja i naprawa turbosprężarek', description: 'Pełen serwis turbo' },
  { icon: Filter, title: 'Czyszczenie DPF', description: 'Usuwanie nagaru z filtru cząstek stałych' },
  { icon: Settings, title: 'Wymiana oleju i filtrów', description: 'Serwis okresowy' },
  { icon: Wrench, title: 'Naprawa zawieszenia i układów hamulcowych', description: 'Bezpieczeństwo jazdy' },
  { icon: Gauge, title: 'Układy wydechowe', description: 'Naprawa i wymiana' },
  { icon: CheckCircle, title: 'Naprawy powypadkowe', description: 'Kompleksowa regeneracja' },
];

const acServices = [
  { icon: Wind, title: 'Pełny serwis klimatyzacji', description: 'Kompleksowa obsługa systemu' },
  { icon: Droplet, title: 'Nabijanie czynnikiem', description: 'R134a i R1234yf' },
  { icon: Gauge, title: 'Test szczelności układu', description: 'Wykrywanie nieszczelności' },
  { icon: Fan, title: 'Naprawa kompresorów', description: 'Profesjonalna regeneracja' },
  { icon: Sparkles, title: 'Odgrzybianie i dezynfekcja wnętrza', description: 'Ozonowanie - świeże powietrze' },
];

export function Services() {
  const { serviceType } = useService();
  const services = serviceType === 'mechanics' ? mechanicsServices : acServices;

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={serviceType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 ${
                  serviceType === 'mechanics'
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-white'
                }`}
              >
                {serviceType === 'mechanics' ? (
                  <Wrench className="w-6 h-6" />
                ) : (
                  <Wind className="w-6 h-6" />
                )}
                <span className="font-bold text-lg">
                  {serviceType === 'mechanics' ? 'Mechanika Pojazdowa' : 'Serwis Klimatyzacji'}
                </span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                Nasze Usługi
              </h2>
              <p className="text-xl text-muted max-w-2xl mx-auto">
                {serviceType === 'mechanics'
                  ? 'Kompleksowa naprawa i serwis pojazdów. Od diagnostyki po remonty kapitalne.'
                  : 'Profesjonalny serwis klimatyzacji. Chłodne powietrze przez cały rok.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105"
                  >
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                        serviceType === 'mechanics'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-secondary/10 text-secondary'
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted leading-relaxed">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
