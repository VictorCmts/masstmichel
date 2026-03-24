'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';

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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  // Build alternate locale path
  const segments = pathname.split('/');
  segments[1] = otherLocale;
  const alternatePath = segments.join('/') || `/${otherLocale}`;

  const localizedHref = (href: string) => `/${locale}${href}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--color-blanc)]/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
        style={{ height: '80px' }}
      >
        <div className="container-site h-full flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex flex-col items-start leading-none group">
            <span
              className={`text-xl font-light tracking-[0.2em] uppercase transition-colors ${
                scrolled ? 'text-[var(--color-charcoal)]' : 'text-white'
              }`}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Mas Saint Michel
            </span>
            <span
              className={`text-[0.6rem] tracking-[0.35em] uppercase font-light transition-colors ${
                scrolled ? 'text-[var(--color-gris-doux)]' : 'text-white/70'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t('tagline')}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={localizedHref(link.href)}
                className={`text-xs tracking-[0.12em] uppercase font-light transition-colors hover:text-[var(--color-terre)] ${
                  scrolled ? 'text-[var(--color-charcoal)]' : 'text-white/90'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {t(link.key as keyof typeof t)}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <Link
              href={alternatePath}
              className={`text-[0.65rem] tracking-[0.15em] uppercase font-light transition-colors hover:text-[var(--color-or)] ${
                scrolled ? 'text-[var(--color-gris-doux)]' : 'text-white/70'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {otherLocale.toUpperCase()}
            </Link>

            {/* CTA */}
            <Link
              href={localizedHref('/reservation')}
              className="btn-primary text-xs py-2.5 px-6"
            >
              {t('reserver')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? 'text-[var(--color-charcoal)]' : 'text-white'
            }`}
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[var(--color-charcoal)] flex flex-col">
          <div className="flex items-center justify-between px-6 py-6">
            <Link
              href={`/${locale}`}
              onClick={() => setMobileOpen(false)}
              className="flex flex-col leading-none"
            >
              <span
                className="text-xl font-light tracking-[0.2em] uppercase text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Mas Saint Michel
              </span>
              <span
                className="text-[0.6rem] tracking-[0.35em] uppercase font-light text-white/50"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Provence
              </span>
            </Link>
            <button
              className="text-white p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 px-8 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={localizedHref(link.href)}
                className="text-2xl font-light text-white/90 py-3 border-b border-white/10 hover:text-[var(--color-or)] transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {t(link.key as keyof typeof t)}
              </Link>
            ))}
          </nav>

          <div className="mt-auto px-8 pb-12 flex flex-col gap-4">
            <Link
              href={alternatePath}
              className="text-white/50 text-sm tracking-widest uppercase hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {otherLocale.toUpperCase()}
            </Link>
            <Link
              href={localizedHref('/reservation')}
              className="btn-primary text-center"
            >
              {t('reserver')}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
