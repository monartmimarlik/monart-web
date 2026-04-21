"use client";

import { motion } from "framer-motion";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export default function ProjelerPage() {
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
              Portfolyo
            </p>
            <h1 className="heading-xl text-white mb-6">Projelerimiz</h1>
            <p className="text-primary-300 max-w-2xl mx-auto">
              2021&apos;den bu yana tamamladığımız projeleri keşfedin. Her biri özgün
              tasarım ve titiz işçilikle hayata geçirilmiştir.
            </p>
          </motion.div>
        </div>
      </section>

      <ProjectsGrid showFilters={true} />
    </>
  );
}
