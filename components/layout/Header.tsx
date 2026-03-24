'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { key: 'leMas', href: '/le-mas' },
  { key: 'chambres', href: '/chambres-et-suites' },
  { key: 'experiences', href: '/experiences' },
  { key: 'galerie', href: '/galerie' },
  { key: 'contact', href: '/contact' },
];

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const segments = pathname.split('/');
  segments[1] = otherLocale;
  const alternatePath = segments.join('/') || `/${otherLocale}`;

  const localizedHref = (href: string) => `/${locale}${href}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--pierre-chaude)]/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
        style={{ height: '88px' }}
      >
        <div className="container-site h-full flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex flex-col items-start leading-none group">
            <span
              className={`text-xl tracking-[0.22em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-[var(--brun-mas)]' : 'text-white'
              }`}
              style={{ fontFamily: 'var(--font-accent)', fontWeight: 400 }}
            >
              Mas Saint Michel
            </span>
            <span
              className={`text-[0.6rem] tracking-[0.35em] uppercase font-light transition-colors duration-300 mt-0.5 ${
                scrolled ? 'text-[var(--garrigue)]' : 'text-white/60'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Provence · Luberon
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={localizedHref(link.href)}
                className={`nav-link-hover text-xs tracking-[0.14em] uppercase font-light transition-colors duration-300 hover:text-[var(--ocre-soleil)] ${
                  scrolled ? 'text-[var(--brun-mas)]' : 'text-[var(--pierre-chaude)]'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {t(link.key as keyof typeof t)}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Language switcher */}
            <Link
              href={alternatePath}
              className={`text-[0.65rem] tracking-[0.2em] uppercase font-light border transition-colors duration-300 px-2 py-1 rounded-sm ${
                scrolled
                  ? 'border-[var(--garrigue)] text-[var(--garrigue)] hover:border-[var(--ocre-soleil)] hover:text-[var(--ocre-soleil)]'
                  : 'border-white/40 text-white/60 hover:border-white/80 hover:text-white'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {otherLocale.toUpperCase()}
            </Link>

            {/* CTA */}
            <Link
              href={localizedHref('/reservation')}
              className={`btn-primary text-xs py-2.5 px-6 ${
                !scrolled ? 'bg-[var(--ocre-soleil)] !text-white' : ''
              }`}
            >
              {t('reserver')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              scrolled ? 'text-[var(--brun-mas)]' : 'text-white'
            }`}
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="8" x2="21" y2="8" />
              <line x1="3" y1="16" x2="21" y2="16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: 'var(--lavande-mist)' }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-7">
              <Link
                href={`/${locale}`}
                onClick={() => setMobileOpen(false)}
                className="flex flex-col leading-none"
              >
                <span
                  className="text-xl tracking-[0.22em] uppercase text-[var(--brun-mas)]"
                  style={{ fontFamily: 'var(--font-accent)', fontWeight: 400 }}
                >
                  Mas Saint Michel
                </span>
                <span
                  className="text-[0.6rem] tracking-[0.35em] uppercase font-light text-[var(--garrigue)] mt-0.5"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Provence · Luberon
                </span>
              </Link>
              <button
                className="text-[var(--brun-mas)] p-2"
                onClick={() => setMobileOpen(false)}
                aria-label="Fermer le menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-1 px-8 mt-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 + idx * 0.07 }}
                >
                  <Link
                    href={localizedHref(link.href)}
                    className="block text-3xl font-light text-[var(--brun-mas)] py-3.5 border-b border-[var(--pierre-medium)] hover:text-[var(--ocre-soleil)] transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {t(link.key as keyof typeof t)}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto px-8 pb-12 flex flex-col gap-4">
              <Link
                href={alternatePath}
                className="text-[var(--garrigue)] text-sm tracking-widest uppercase hover:text-[var(--brun-mas)] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {otherLocale.toUpperCase()} — Changer de langue
              </Link>
              <Link
                href={localizedHref('/reservation')}
                className="btn-primary text-center"
              >
                {t('reserver')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
