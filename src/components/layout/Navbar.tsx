"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { getWhatsAppLink, cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isHome = pathname === "/";
  const isDark = isHome && !isScrolled;

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isDark && !isMobileMenuOpen
            ? "bg-transparent py-5"
            : (isScrolled || isMobileMenuOpen)
              ? "bg-white/95 backdrop-blur-xl py-3 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
              : "bg-white py-4 border-b border-taupe-200"
        )}
      >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          <Image 
            src="/logo backgroundless.png" 
            alt="Bark & Bond Icon" 
            width={50} 
            height={46} 
            className="h-[38px] md:h-[46px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className={cn(
            "font-cormorant font-medium uppercase tracking-[0.02em] leading-none transition-colors duration-300 flex items-center pt-1",
            "text-[24px] md:text-[28px]",
            (isDark && !isMobileMenuOpen) ? "text-white" : "text-[#123D32]"
          )}>
            BARK <span className="text-[0.85em] mx-[0.4em] font-medium">&amp;</span> BOND
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                isActive(link.href)
                  ? (isDark && !isMobileMenuOpen) ? "text-white" : "text-forest-900"
                  : (isDark && !isMobileMenuOpen) ? "text-taupe-200 hover:text-white" : "text-taupe-500 hover:text-forest-900"
              )}
            >
              {link.label}
              {/* Active underline */}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brass-500 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Social Icons */}
          <div className="flex items-center gap-3 mr-2">
            <a href="https://www.instagram.com/the.furstylist?igsi=cXp4MjY4bmIyajMy" target="_blank" rel="noopener noreferrer" className={cn("transition-colors hover:text-brass-500", (isDark && !isMobileMenuOpen) ? "text-white" : "text-forest-900")} aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.facebook.com/share/1Efomb5y9s/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className={cn("transition-colors hover:text-brass-500", (isDark && !isMobileMenuOpen) ? "text-white" : "text-forest-900")} aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>

          <a
            href={getWhatsAppLink("Hi, I'd like to know more about your services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-brass-500 hover:bg-brass-600 text-forest-900 text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-[0_4px_16px_rgba(214,163,101,0.3)]"
          >
            WhatsApp Us
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("lg:hidden p-2 -mr-2", (isDark && !isMobileMenuOpen) ? "text-white" : "text-forest-900")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 flex flex-col h-[calc(100dvh-72px)] overflow-y-auto">
          <nav className="flex flex-col px-6 pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "py-4 text-lg font-medium border-b border-taupe-200 transition-colors",
                  isActive(link.href)
                    ? "text-forest-900 border-b-brass-500"
                    : "text-taupe-500 hover:text-forest-900"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 px-6 mt-auto pb-10">
            {/* Mobile Socials */}
            <div className="flex justify-center gap-6 py-4">
              <a href="https://www.instagram.com/the.furstylist?igsi=cXp4MjY4bmIyajMy" target="_blank" rel="noopener noreferrer" className="text-forest-900 hover:text-brass-500" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.facebook.com/share/1Efomb5y9s/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-forest-900 hover:text-brass-500" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>

            <a
              href="tel:+919677555002"
              className="flex items-center justify-center gap-2 w-full py-4 border border-taupe-200 text-forest-900 rounded-full font-medium hover:bg-oatmeal transition-colors"
            >
              <Phone size={18} />
              <span>+91 96775 55002</span>
            </a>
            <a
              href={getWhatsAppLink("Hi, I'd like to know more about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-brass-500 hover:bg-brass-600 text-forest-900 rounded-full font-semibold transition-colors"
            >
              WhatsApp Us
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
