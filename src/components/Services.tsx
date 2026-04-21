"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Key,
  Compass,
  RefreshCw,
  Armchair,
  Building,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/projects";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Building2,
  Key,
  Compass,
  RefreshCw,
  Armchair,
  Building,
};

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50 -skew-x-12 translate-x-1/4 hidden lg:block" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4">
              Hizmetlerimiz
            </p>
            <h2 className="heading-lg text-primary-900">
              Uzmanlık Alanlarımız
            </h2>
          </div>
          <p className="text-primary-500 max-w-md lg:text-right">
            İnşaat ve mimarlık alanında geniş bir hizmet yelpazesiyle
            projelerinize değer katıyoruz.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-primary-50 p-8 overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-light transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="absolute -right-4 -top-4 text-[120px] font-bold text-primary-100 select-none group-hover:text-primary-200 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary-900 text-white flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    {IconComponent && <IconComponent className="w-7 h-7" />}
                  </div>

                  <h3 className="text-xl font-semibold text-primary-900 mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-primary-500 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-medium text-primary-400 group-hover:text-accent transition-colors duration-300">
                    <span>Detaylı Bilgi</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
