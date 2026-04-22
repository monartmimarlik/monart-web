"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Building2, Clock } from "lucide-react";
import { companyInfo } from "@/data/projects";
import { Contact } from "@/components/Contact";

const stats = [
  { icon: Building2, value: "50+", label: "Tamamlanan Proje" },
  { icon: Users, value: "100+", label: "Mutlu Müşteri" },
  { icon: Award, value: "5+", label: "Yıllık Deneyim" },
  { icon: Clock, value: "24/7", label: "Destek" },
];

const values = [
  {
    title: "Kalite Odaklılık",
    description: "Her projede en yüksek kalite standartlarını hedefliyoruz.",
  },
  {
    title: "Şeffaflık",
    description: "Müşterilerimizle açık ve dürüst iletişim kuruyoruz.",
  },
  {
    title: "İnovasyon",
    description: "Modern tasarım ve teknolojileri projelerimize entegre ediyoruz.",
  },
  {
    title: "Sürdürülebilirlik",
    description: "Çevre dostu ve sürdürülebilir çözümler üretiyoruz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-accent-light mb-4">
              Hakkımızda
            </p>
            <h1 className="heading-xl text-white mb-6">
              MONART İnşaat ve Mimarlık
            </h1>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Mimarlığı yalnızca yapılar inşa etmek olarak değil; aynı zamanda bir
              yaşam biçimi, bir deneyim alanı olarak görüyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4">
                Hikayemiz
              </p>
              <h2 className="heading-lg text-primary-900 mb-6">
                2021&apos;den Bu Yana Hizmetinizdeyiz
              </h2>

              <p className="text-primary-600 leading-relaxed mb-6">
                {companyInfo.description}
              </p>

              <p className="text-primary-500 leading-relaxed mb-6">
                Kurucusunun sektörde edindiği uygulama tecrübeleri, şantiye yönetimi
                ve proje yürütücülüğü gibi sorumluluklar MONART&apos;ın hizmet anlayışına
                doğrudan yansımaktadır. Bu deneyimler, firmanın sahadaki her adımı
                önceden öngörmesini, çözüm odaklı yaklaşımını pekiştirmesini ve
                işverenin beklentilerini en verimli şekilde karşılamasını sağlamaktadır.
              </p>

              <p className="text-primary-500 leading-relaxed">
                Bugün MONART Mimarlık, yalnızca teknik yeterliliğiyle değil;
                güvenilirliği, iletişim gücü ve projelere kattığı yaratıcı
                dokunuşlarla da öne çıkan bir mimarlık ofisidir.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                    alt="MONART Mimarlık"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent p-6 text-white">
                  <p className="text-4xl font-bold mb-1">2021</p>
                  <p className="text-sm">Kuruluş Yılı</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-white/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent-light" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-primary-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4">
              Değerlerimiz
            </p>
            <h2 className="heading-lg text-primary-900 mb-6">
              Bizi Biz Yapan Değerler
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4">
                Kurucu
              </p>
              <h2 className="heading-lg text-primary-900 mb-2">
                Mehmet Emin KARADAĞ
              </h2>
              <p className="text-accent mb-6">Mimar</p>

              <p className="text-primary-600 leading-relaxed mb-6">
                Sektörde edindiği uygulama tecrübeleri, şantiye yönetimi ve proje
                yürütücülüğü gibi sorumluluklar sayesinde MONART&apos;ın hizmet
                anlayışını şekillendirmiştir.
              </p>

              <p className="text-primary-500 leading-relaxed">
                Her yeni projeyi, kendine özgü potansiyeli olan bir keşif yolculuğu
                olarak gören Mehmet Emin KARADAĞ; hem iş ortaklarına hem de projeye
                değer katmayı hedeflemektedir.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
