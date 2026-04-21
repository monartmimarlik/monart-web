"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { companyInfo } from "@/data/projects";

const highlights = [
  "2021'den bu yana profesyonel hizmet",
  "Titiz işçilik ve kalite anlayışı",
  "Proje yönetimi ve koordinasyon",
  "Sürdürülebilir tasarım çözümleri",
];

export function About() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="MONART Mimarlık - Modern Yapı"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent hidden lg:flex items-center justify-center">
              <div className="text-center text-white">
                <span className="block text-4xl font-bold">5+</span>
                <span className="text-sm">Yıllık Deneyim</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4">
              Hakkımızda
            </p>
            <h2 className="heading-lg text-primary-900 mb-6">
              Mimarlığı Bir Yaşam Biçimi Olarak Görüyoruz
            </h2>

            <p className="text-primary-600 leading-relaxed mb-6">
              {companyInfo.description}
            </p>

            <p className="text-primary-500 leading-relaxed mb-8">
              Konut, renovasyon, altyapı ve kamu projeleri başta olmak üzere,
              sahada aktif görev alınan her çalışmada; işlevselliği, estetiği ve
              sürdürülebilirliği bir araya getiren bir bakış açısı
              benimsenmektedir.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-700">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link href="/hakkimizda" className="btn-primary">
              Daha Fazla Bilgi
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
