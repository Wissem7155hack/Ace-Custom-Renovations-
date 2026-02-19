"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Facebook, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from './Logo';
import { NAV_LINKS, COMPANY_DETAILS } from '@/lib/constants';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // when the menu is toggled, recalc scroll state so header style is correct
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-background/100 border-b border-border",
      )}
    >
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  pathname === link.href ? "text-primary" : "text-foreground/80"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 block h-0.5 w-full bg-primary"
                  />
                )}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="bg-gradient-to-r from-primary to-brand-blue-glow hover:shadow-glow-primary transition-shadow duration-300">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-card shadow-2xl z-[100]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <Logo />
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close menu">
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex-grow p-6">
                  <ul className="space-y-6">
                    {NAV_LINKS.map((link, i) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className="text-2xl font-medium transition-colors hover:text-primary block"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                <div className="p-6 border-t border-border space-y-6">
                  <Button asChild size="lg" className="w-full bg-gradient-to-r from-primary to-brand-blue-glow">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Get a Free Quote</Link>
                  </Button>
                  <div className="flex justify-center items-center gap-6">
                    <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-muted-foreground hover:text-primary transition-colors"><Phone /></a>
                    <a href={COMPANY_DETAILS.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
