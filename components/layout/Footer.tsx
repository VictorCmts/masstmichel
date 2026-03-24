import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Share2, ExternalLink } from 'lucide-react';
import { rooms } from '@/data/rooms';

const navLinks = [
  { key: 'leMas', href: '/le-mas' },
  { key: 'chambres', href: '/chambres-et-suites' },
  { key: 'experiences', href: '/experiences' },
  { key: 'galerie', href: '/galerie' },
  { key: 'contact', href: '/contact' },
];

export default async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations('footer');
  const nav = await getTranslations('nav');

  const localizedHref = (href: string) => `/${locale}${href}`;

  return (
    <footer className="bg-[var(--color-charcoal)] text-white">
      <div className="container-site py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo + tagline */}
          <div>
            <Link href={`/${locale}`} className="block mb-4">
              <span
                className="text-2xl font-light tracking-[0.2em] uppercase text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Mas Saint Michel
              </span>
            </Link>
            <p
              className="text-white/60 text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t('tagline')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[var(--color-or)] transition-colors"
                aria-label="Instagram"
              >
                <Share2 size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[var(--color-or)] transition-colors"
                aria-label="Facebook"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase text-white/40 mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t('navigation')}
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={localizedHref(link.href)}
                  className="text-white/70 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {nav(link.key as keyof typeof nav)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Rooms */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase text-white/40 mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t('rooms')}
            </h4>
            <nav className="flex flex-col gap-3">
              {rooms.map((room) => (
                <Link
                  key={room.id}
                  href={localizedHref(`/chambres-et-suites/${room.slug}`)}
                  className="text-white/70 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {room.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase text-white/40 mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t('contact')}
            </h4>
            <div
              className="flex flex-col gap-3 text-sm text-white/70"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <p>{t('address')}</p>
              <a
                href="tel:+33400000000"
                className="hover:text-white transition-colors"
              >
                {t('phone')}
              </a>
              <a
                href="mailto:contact@masstmichel.fr"
                className="hover:text-white transition-colors"
              >
                {t('email')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('copyright')}
          </p>
          <div
            className="flex items-center gap-6 text-xs text-white/40"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <Link
              href={localizedHref('/mentions-legales')}
              className="hover:text-white/70 transition-colors"
            >
              {t('legal')}
            </Link>
            <Link
              href={localizedHref('/mentions-legales')}
              className="hover:text-white/70 transition-colors"
            >
              {t('cgv')}
            </Link>
            <Link
              href={localizedHref('/mentions-legales')}
              className="hover:text-white/70 transition-colors"
            >
              {t('privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
