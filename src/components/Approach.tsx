"use client";

import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Clock } from "lucide-react";

const approaches = [
  {
    icon: Target,
    title: "Doğru Detay Çözümleri",
    description: "Her projenin kendine özgü ihtiyaçlarına uygun, titizlikle hazırlanmış teknik detaylar.",
  },
  {
    icon: Users,
    title: "Sahada Güçlü Koordinasyon",
    description: "Tüm paydaşlarla etkili iletişim ve ekipler arası uyumlu çalışma anlayışı.",
  },
  {
    icon: TrendingUp,
    title: "Maliyet Kontrolü",
    description: "Bütçe planlaması ve kaynak yönetimi ile verimli proje süreçleri.",
  },
  {
    icon: Clock,
    title: "Zamanında Teslimat",
    description: "Proje takvimlerine bağlı kalarak planlanan sürede tamamlama taahhüdü.",
  },
];

export function Approach() {
  return (
    <section className="section-padding bg-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.2em] uppercase text-accent-light mb-4">
              Çalışma Yaklaşımı
            </p>
            <h2 className="heading-lg text-white mb-6">
              Her Adımda <br />
              <span className="text-accent-light">Aktif Takip</span>
            </h2>

            <p className="text-primary-300 text-lg leading-relaxed mb-8">
              Projeler yalnızca tasarım aşamasında değil, uygulama sürecinin her
              adımında aktif olarak takip edilir. Amaç; doğru detay çözümleri, sahada
              güçlü koordinasyon ve maliyet kontrolü ile projeyi planlanan kalite ve zaman
              çerçevesinde hayata geçirmektir.
            </p>

            <div className="flex items-center">
              <div className="text-center">
                <span className="block text-4xl font-bold text-accent-light">%100</span>
                <span className="text-sm text-primary-400">Müşteri Memnuniyeti</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {approaches.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-accent flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
