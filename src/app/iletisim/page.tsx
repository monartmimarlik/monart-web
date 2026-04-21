"use client";

import { motion } from "framer-motion";
import { Contact } from "@/components/Contact";

export default function IletisimPage() {
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
              İletişim
            </p>
            <h1 className="heading-xl text-white mb-6">Bizimle İletişime Geçin</h1>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Projeleriniz için profesyonel destek almak veya sorularınız için
              bize ulaşabilirsiniz. En kısa sürede size dönüş yapacağız.
            </p>
          </motion.div>
        </div>
      </section>

      <Contact />
    </>
  );
}
