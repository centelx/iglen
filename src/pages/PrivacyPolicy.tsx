import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-white mb-6">
              <Shield className="w-6 h-6" />
              <span className="font-bold text-lg">Regulamin i Prywatność</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Polityka Prywatności i Regulamin
            </h1>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Administrator Danych</h2>
              <p className="text-muted leading-relaxed">
                Administratorem jest firma <strong>IGLEN Martyna Śliwa</strong> z siedzibą przy{' '}
                <strong>ul. Krakowska 30, 32-640 Palczowice</strong>, <strong>NIP: 549-225-7924</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Cel przetwarzania</h2>
              <p className="text-muted leading-relaxed">
                Przetwarzamy dane (imię, nazwisko, email, telefon) w celu: odpowiedzi na zapytania z
                formularza, realizacji usług naprawy oraz obowiązków prawnych (faktury).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Nagrywanie rozmów</h2>
              <p className="text-muted leading-relaxed">
                Informujemy, że rozmowy telefoniczne mogą być nagrywane w celach zapewnienia jakości
                obsługi. Jeśli nie wyrażasz na to zgody, prosimy o kontakt mailowy:{' '}
                <a href="mailto:iglen.zator@gmail.com" className="text-accent hover:underline">
                  iglen.zator@gmail.com
                </a>{' '}
                lub wizytę osobistą.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Prawa użytkownika</h2>
              <p className="text-muted leading-relaxed">
                Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia
                przetwarzania.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Regulamin Serwisu</h2>
              <p className="text-muted leading-relaxed mb-4">
                Strona ma charakter informacyjny. Treści nie stanowią oferty handlowej w rozumieniu
                Kodeksu Cywilnego. Ceny usług ustalane są indywidualnie (roboczogodzina) po diagnozie
                usterki.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Reklamacje</h2>
              <p className="text-muted leading-relaxed">
                Wszelkie reklamacje dotyczące usług należy zgłaszać osobiście lub mailowo.
                Rozpatrzenie następuje w ciągu 14 dni.
              </p>
            </section>

            <section className="bg-slate-50 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Dane Kontaktowe</h3>
              <div className="space-y-2 text-muted">
                <p>
                  <strong>IGLEN Martyna Śliwa</strong>
                </p>
                <p>ul. Krakowska 30, 32-640 Palczowice</p>
                <p>
                  Tel: <a href="tel:+48695730700" className="text-accent hover:underline">695 730 700</a> / <a href="tel:+48603474139" className="text-accent hover:underline">603 474 139</a>
                </p>
                <p>
                  Email:{' '}
                  <a href="mailto:iglen.zator@gmail.com" className="text-accent hover:underline">
                    iglen.zator@gmail.com
                  </a>
                </p>
                <p>NIP: 549-225-7924</p>
              </div>
            </section>

            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-sm text-muted">
                Dokument obowiązuje od dnia 1 stycznia 2024 r.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
