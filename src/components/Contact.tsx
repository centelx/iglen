import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ExternalLink } from 'lucide-react';

export function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '4343a106-203d-4279-9980-da05e02f360f');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent text-white mb-6">
              <Phone className="w-6 h-6" />
              <span className="font-bold text-lg">Skontaktuj Się</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Umów Wizytę
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Zadzwoń, napisz lub odwiedź nas osobiście. Chętnie odpowiemy na wszystkie pytania.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Dane Kontaktowe</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Telefon</div>
                      <a href="tel:+48695730700" className="text-muted hover:text-accent transition-colors">
                        695 730 700
                      </a>
                      <br />
                      <a href="tel:+48603474139" className="text-muted hover:text-accent transition-colors">
                        603 474 139
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Email</div>
                      <a
                        href="mailto:iglen.zator@gmail.com"
                        className="text-muted hover:text-accent transition-colors"
                      >
                        iglen.zator@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Adres</div>
                      <div className="text-muted">
                        ul. Krakowska 30<br />
                        32-640 Palczowice
                      </div>
                      <a
                        href="https://share.google/Oi76AoBMJGTHPAZaM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:underline mt-2"
                      >
                        Zobacz dojazd w Google Maps
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Godziny Otwarcia</div>
                      <div className="text-muted">
                        Poniedziałek - Piątek: 9:00 - 17:00<br />
                        Sobota: 9:00 - 14:00<br />
                        Niedziela: Zamknięte
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-4">Informacja o nagrywaniu rozmów</h4>
                <p className="text-gray-200 leading-relaxed">
                  Rozmowy telefoniczne mogą być nagrywane w celach zapewnienia jakości obsługi.
                  Jeśli nie wyrażasz na to zgody, prosimy o kontakt mailowy lub wizytę osobistą.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Formularz Kontaktowy</h3>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 mb-6 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">Wiadomość została wysłana pomyślnie!</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                    Imię i Nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                    Numer Telefonu *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-primary mb-2">
                    Wybór Usługi *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  >
                    <option value="">Wybierz usługę...</option>
                    <option value="mechanika">Mechanika Pojazdowa</option>
                    <option value="klimatyzacja">Serwis Klimatyzacji</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Opisz czym możemy Ci pomóc..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Wyślij Wiadomość
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
