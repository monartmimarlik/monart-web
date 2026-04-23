"use client";

import { useState } from "react";
import { ProjectMedia } from "@/components/ProjectMedia";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { projects, categories } from "@/data/projects";

interface ProjectsGridProps {
  showFilters?: boolean;
  limit?: number;
  excludeIds?: string[];
}

export function ProjectsGrid({
  showFilters = true,
  limit,
  excludeIds = [],
}: ProjectsGridProps) {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const reduceMotion = useReducedMotion();

  const filteredProjects =
    activeCategory === "Tümü"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const visibleProjects = filteredProjects.filter(
    (project) => !excludeIds.includes(project.id)
  );

  const sortedProjects = [...visibleProjects].sort((a, b) => {
    const yearDiff = Number(a.year) - Number(b.year);
    if (yearDiff !== 0) return yearDiff;
    return a.title.localeCompare(b.title, "tr");
  });

  const displayedProjects = limit
    ? sortedProjects.slice(0, limit)
    : sortedProjects;

  const containerVariants = {
    hidden: { opacity: reduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.06,
        delayChildren: reduceMotion ? 0 : 0.02,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.42,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projeler" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4">
            Portfolyo
          </p>
          <h2 className="heading-lg text-primary-900 mb-6">Projelerimiz</h2>
          <p className="text-primary-500 max-w-2xl mx-auto">
            Her biri özgün tasarım ve titiz işçilikle hayata geçirilen
            projelerimizi keşfedin.
          </p>
        </motion.div>

        {showFilters && (
          <motion.div
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.12 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary-900 text-white"
                    : "bg-primary-100 text-primary-600 hover:bg-primary-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}

        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {displayedProjects.map((project) => (
            <motion.article key={project.id} variants={itemVariants}>
              <Link href={`/projeler/${project.id}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-primary-100">
                  <ProjectMedia
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-primary-900" />
                  </div>
                </div>

                <div className="pt-4 sm:pt-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium tracking-wide uppercase text-accent">
                      {project.category}
                    </span>
                    <span className="text-primary-300">•</span>
                    <span className="text-xs text-primary-400">{project.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-primary-900 mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-primary-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm leading-snug">{project.location}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {limit && sortedProjects.length > limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/projeler" className="btn-outline">
              Tüm Projeleri Görüntüle
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
