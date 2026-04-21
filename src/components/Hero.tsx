"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=70";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <Image
          src={HERO_IMAGE}
          alt="Modern mimari cephe"
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 min-h-[100svh] flex flex-col justify-center items-center text-center text-white container-custom pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.8, delay: reduceMotion ? 0 : 0.2 }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.6, delay: reduceMotion ? 0 : 0.3 }}
            className="text-xs sm:text-sm md:text-base tracking-[0.22em] sm:tracking-[0.3em] uppercase text-white/80 mb-5"
          >
            Mimarlık & İnşaat
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.8, delay: reduceMotion ? 0 : 0.5 }}
            className="heading-xl text-white mb-6"
          >
            Yaşam Alanlarınıza
            <br />
            <span className="text-accent-light">Değer</span> Katıyoruz
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.6, delay: reduceMotion ? 0 : 0.7 }}
            className="text-base md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto px-1"
          >
            Mimari tasarımdan uygulamaya, her projeye özgün bir bakış açısı ve
            titiz bir işçilikle yaklaşıyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.6, delay: reduceMotion ? 0 : 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto"
          >
            <Link href="/projeler" className="btn-primary">
              Projelerimizi Keşfedin
            </Link>
            <Link href="/iletisim" className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
              İletişime Geçin
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0.1 : 0.6, delay: reduceMotion ? 0 : 1.2 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          {!reduceMotion && (
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <a
                href="#projeler"
                className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <span className="text-xs tracking-widest uppercase">Keşfet</span>
                <ArrowDown className="w-5 h-5" />
              </a>
            </motion.div>
          )}
          {reduceMotion && (
            <a
              href="#projeler"
              className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <span className="text-xs tracking-widest uppercase">Keşfet</span>
              <ArrowDown className="w-5 h-5" />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
