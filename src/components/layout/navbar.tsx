"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const navLinks = [
  { name: "Destinations", href: "/destinations" },
  { name: "Safaris", href: "/tours?category=Wildlife Safaris" },
  { name: "Kilimanjaro", href: "/tours?category=Kilimanjaro" },
  { name: "Zanzibar", href: "/tours?category=Zanzibar" },
  { name: "About Us", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ backgroundColor: "rgba(250, 243, 235, 0)" }}
        animate={{ 
          backgroundColor: isScrolled ? "rgba(250, 243, 235, 0.95)" : "rgba(250, 243, 235, 0)",
          boxShadow: isScrolled ? "0 4px 20px rgba(28, 15, 6, 0.05)" : "none",
          backdropFilter: isScrolled ? "blur(8px)" : "none"
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed w-full z-50 transition-colors"
      >
        <div className="w-full max-w-[95%] 2xl:max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-28 md:h-36 lg:h-40 py-4">
            {/* Logo */}
            <Link href="/" className="relative h-16 w-48 md:h-24 md:w-64 lg:h-32 lg:w-80 xl:h-36 xl:w-[26rem] flex items-center shrink-0 mt-2">
              <Image 
                src="/images/logo.png" 
                alt="Tanzania Travel Company" 
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain object-left"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-medium text-sm tracking-widest uppercase text-foreground hover:text-accent transition-colors duration-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <Link 
                href="/contact" 
                className={buttonVariants({ variant: "default", className: "hidden md:inline-flex bg-primary hover:bg-secondary text-primary-foreground font-medium px-8 py-6 rounded-none transition-all duration-500 uppercase tracking-widest text-xs" })}
              >
                Enquire Now
              </Link>
              <button
                className="lg:hidden p-2 text-foreground"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu strokeWidth={1.5} className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-background flex flex-col pt-24 px-8"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-foreground hover:text-accent transition-colors duration-500"
            >
              <X strokeWidth={1.5} className="w-10 h-10" />
            </button>
            
            <div className="flex flex-col space-y-8 mt-12">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1), duration: 0.5 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-4xl text-foreground hover:text-accent transition-colors duration-500"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="pt-8 border-t border-border"
              >
                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={buttonVariants({ variant: "default", className: "w-full justify-center bg-primary hover:bg-secondary text-primary-foreground font-medium py-6 rounded-none transition-all duration-500 uppercase tracking-widest text-sm" })}
                >
                  Enquire Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
