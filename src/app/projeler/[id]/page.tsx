"use client";

import { useParams, notFound } from "next/navigation";
import { ProjectMedia } from "@/components/ProjectMedia";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Tag, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectDetailPage() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-primary-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projeler"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Tüm Projeler
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-4 py-1.5 bg-accent text-white text-sm font-medium">
                {project.category}
              </span>
            </div>

            <h1 className="heading-xl text-white mb-6">{project.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-primary-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent-light" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent-light" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-accent-light" />
                <span>{project.category}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="aspect-[16/10] relative mb-8 overflow-hidden bg-primary-100">
                <ProjectMedia
                  src={project.gallery[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-12">
                {project.gallery.slice(1).map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="aspect-[4/3] relative overflow-hidden bg-primary-100"
                  >
                    <ProjectMedia
                      src={image}
                      alt={`${project.title} - Görsel ${index + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="heading-md text-primary-900 mb-6">
                  Proje Hakkında
                </h2>
                <p className="text-primary-600 leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-primary-50 p-8 sticky top-32">
                <h3 className="text-xl font-semibold text-primary-900 mb-6">
                  Proje Detayları
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4 py-3 border-b border-primary-200">
                    <span className="text-primary-500 shrink-0">Proje Adı</span>
                    <span className="font-medium text-primary-900 sm:text-right sm:max-w-[60%] sm:break-words">
                      {project.title}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4 py-3 border-b border-primary-200">
                    <span className="text-primary-500 shrink-0">Konum</span>
                    <span className="font-medium text-primary-900 sm:text-right sm:max-w-[60%] sm:break-words">
                      {project.location}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4 py-3 border-b border-primary-200">
                    <span className="text-primary-500 shrink-0">Yıl</span>
                    <span className="font-medium text-primary-900 sm:text-right sm:max-w-[60%] sm:break-words">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4 py-3 border-b border-primary-200">
                    <span className="text-primary-500 shrink-0">Kategori</span>
                    <span className="font-medium text-primary-900 sm:text-right sm:max-w-[60%] sm:break-words">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-primary-900 mb-4">
                  Öne Çıkanlar
                </h4>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-primary-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-primary-200">
                  <Link href="/iletisim" className="btn-primary w-full">
                    Bu Proje Hakkında Bilgi Al
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-6"
          >
            <div>
              <p className="text-primary-500 mb-2">Diğer projelerimizi keşfedin</p>
              <h3 className="text-2xl font-semibold text-primary-900">
                Benzer Projeler
              </h3>
            </div>
            <Link href="/projeler" className="btn-outline">
              Tüm Projeleri Görüntüle
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
