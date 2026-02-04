import { motion } from 'framer-motion';
import { Award, Heart, DollarSign, Users } from 'lucide-react';
import { useService } from '../context/ServiceContext';

const features = [
  {
    icon: Award,
    title: 'Doświadczenie',
    description: '25 lat w branży, w tym 5 lat w Zatorze. Jesteśmy firmą rodzinną – Martyna i Paweł Śliwa.',
  },
  {
    icon: Heart,
    title: 'Jakość',
    description: 'Stawiamy na sumienność. Naprawiamy to, z czym inni sobie nie radzą.',
  },
  {
    icon: DollarSign,
    title: 'Ceny',
    description: 'Oferujemy usługi na najwyższym poziomie w przystępnych cenach.',
  },
];

export function About() {
  const { serviceType } = useService();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-white mb-6 transition-colors duration-300 ${
              serviceType === 'mechanics' ? 'bg-primary' : 'bg-secondary'
            }`}>
              <Users className="w-6 h-6" />
              <span className="font-bold text-lg">Poznaj Nas</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Dlaczego My?
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Rodzinna firma z pasją do motoryzacji i wieloletnim doświadczeniem
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                  serviceType === 'mechanics' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                }`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-muted leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          key={serviceType}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`text-white rounded-2xl p-12 shadow-2xl relative overflow-hidden transition-colors duration-500 ${
            serviceType === 'mechanics' ? 'bg-primary' : 'bg-secondary'
          }`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              {serviceType === 'mechanics' 
                ? 'Naprawiamy to, z czym inni sobie nie radzą'
                : 'Przywracamy chłód, gdy inni rozkładają ręce'
              }
            </h3>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              {serviceType === 'mechanics'
                ? 'Od prostych przeglądów po skomplikowane naprawy silników i turbosprężarek. Każde zlecenie traktujemy indywidualnie, dbając o najwyższą jakość wykonania.'
                : 'Od wykrywania mikronieszczelności po regenerację kompresorów. Zapewniamy pełną wydajność Twojej klimatyzacji i eliminujemy nieprzyjemne zapachy.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-xl border border-white/20">
                <div className="text-3xl font-bold mb-1">25+</div>
                <div className="text-sm text-gray-100">Lat doświadczenia</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-xl border border-white/20">
                <div className="text-3xl font-bold mb-1">5</div>
                <div className="text-sm text-gray-100">Lat w Zatorze</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-xl border border-white/20">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-gray-100">Zadowolonych klientów</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
