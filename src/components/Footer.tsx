"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/projects";

const footerLinks = {
  menu: [
    { href: "/", label: "Ana Sayfa" },
    { href: "/projeler", label: "Projeler" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/iletisim", label: "İletişim" },
  ],
  services: [
    { href: "/projeler?category=Kaba%20İşler", label: "Kaba İşler" },
    { href: "/projeler?category=Renovasyon", label: "Renovasyon" },
    { href: "/projeler?category=Anahtar%20Teslim", label: "Anahtar Teslim" },
    { href: "/projeler?category=Mobilya%20Tasarım", label: "Mobilya Tasarım" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Merhaba MONART, proje hakkında bilgi almak istiyorum."
  )}`;

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-4">MONART</h3>
            <p className="text-primary-300 text-sm leading-relaxed mb-6">
              Mimari tasarım, uygulama ve proje yönetimi alanlarında 2021&apos;den bu yana
              hizmet vermekteyiz.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/monart.mimarlik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-4">Hızlı Menü</h4>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-4">Hizmetler</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-4">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="text-primary-300 hover:text-white transition-colors text-sm"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-primary-300 hover:text-white transition-colors text-sm break-all"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-300 text-sm">
                  {companyInfo.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-300 hover:text-white transition-colors text-sm"
                >
                  WhatsApp ile iletişim
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-400 text-sm">
              © {currentYear} MONART İnşaat ve Mimarlık. Tüm hakları saklıdır.
            </p>
            <p className="text-primary-500 text-xs">
              Mimar Mehmet Emin KARADAĞ
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
