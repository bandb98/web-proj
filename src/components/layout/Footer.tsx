import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getWhatsAppLink } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Pet Grooming", href: "/services/grooming" },
    { label: "Dog Training", href: "/services/training" },
    { label: "Pet Walking", href: "/services/walking" },
    { label: "Stud Services", href: "/services/stud" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-900 relative overflow-hidden">
      {/* Gold accent line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-brass-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex flex-col items-start gap-4 mb-8 group">
              <Image 
                src="/logo backgroundless.png" 
                alt="Bark & Bond Icon" 
                width={80} 
                height={64} 
                className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-cormorant font-medium uppercase tracking-[0.02em] leading-none text-white text-[28px] md:text-[32px] transition-colors group-hover:text-brass-300">
                BARK <span className="text-[0.85em] mx-[0.4em] font-medium">&amp;</span> BOND
              </span>
            </Link>
            <p className="text-taupe-500 text-base leading-relaxed mb-8 max-w-md font-light">
              Exceptional care for your best friend. Professional grooming, training, and pet care delivered by an experienced team with over 5 years of dedication.
            </p>
            <a
              href={getWhatsAppLink("Hi, I'd like to get in touch regarding your pet services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brass-500 hover:bg-brass-600 text-forest-900 text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-[0_4px_16px_rgba(214,163,101,0.3)]"
            >
              Talk to Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brass-500 mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-taupe-500 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brass-500 mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-taupe-500 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brass-500 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919677555002"
                  className="text-taupe-500 hover:text-white text-sm transition-colors duration-300"
                >
                  +91 96775 55002
                </a>
              </li>
              <li>
                <a
                  href="mailto:barkandbond98@gmail.com"
                  className="text-taupe-500 hover:text-white text-sm transition-colors duration-300"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/thebarkandbond?igsi=cXp4MjY4bmIyajMy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-taupe-500 hover:text-white text-sm transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li className="text-taupe-500 text-sm">Tambaram, Chennai (Door-step)</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-forest-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-taupe-500 text-sm font-light order-3 md:order-1">
            © {new Date().getFullYear()} Bark & Bond. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 order-2 text-taupe-500">
            <a href="https://www.instagram.com/thebarkandbond?igsi=cXp4MjY4bmIyajMy" target="_blank" rel="noopener noreferrer" className="hover:text-brass-500 transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.facebook.com/share/1Jy175Qxnv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-brass-500 transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>

          <div className="flex items-center gap-6 text-xs text-taupe-500 font-light order-1 md:order-3">
            <span>5+ Years Experience</span>
            <span className="w-1 h-1 rounded-full bg-brass-500"></span>
            <span>Professional Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
