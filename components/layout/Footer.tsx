import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
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
    <footer style={{ background: 'var(--nuit-provence)' }} className="text-white">
      <div className="container-site py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo + description */}
          <div>
            <Link href={`/${locale}`} className="block mb-2">
              <span
                className="text-xl tracking-[0.22em] uppercase"
                style={{ fontFamily: 'var(--font-accent)', color: 'var(--pierre-chaude)', fontWeight: 400 }}
              >
                Mas Saint Michel
              </span>
            </Link>
            <p
              className="text-[0.65rem] tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--garrigue)' }}
            >
              Provence · Luberon
            </p>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--lavande-pale)', fontWeight: 300 }}
            >
              Demeure provençale du XVIIIe siècle nichée au pied de La Montagnette, entre Avignon et Arles. Cinq chambres et suites d&rsquo;exception, jardin, piscine et art de vivre provençal.
            </p>

            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/masstmichel"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-100"
                style={{ color: 'var(--lavande-pale)', opacity: 0.6 }}
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/masstmichel"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-100"
                style={{ color: 'var(--lavande-pale)', opacity: 0.6 }}
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4
              className="text-xs tracking-[0.25em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-accent)', color: 'var(--garrigue)', fontWeight: 400 }}
            >
              {t('navigation')}
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={localizedHref(link.href)}
                  className="text-sm transition-colors"
                  style={{ fontFamily: 'var(--font-body)', color: 'rgba(212,202,232,0.65)', fontWeight: 300 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ocre-soleil)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(212,202,232,0.65)')}
                >
                  {nav(link.key as keyof typeof nav)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Rooms */}
          <div>
            <h4
              className="text-xs tracking-[0.25em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-accent)', color: 'var(--garrigue)', fontWeight: 400 }}
            >
              {t('rooms')}
            </h4>
            <nav className="flex flex-col gap-3">
              {rooms.map((room) => (
                <Link
                  key={room.id}
                  href={localizedHref(`/chambres-et-suites/${room.slug}`)}
                  className="text-sm transition-colors"
                  style={{ fontFamily: 'var(--font-body)', color: 'rgba(212,202,232,0.65)', fontWeight: 300 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ocre-soleil)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(212,202,232,0.65)')}
                >
                  {room.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.25em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-accent)', color: 'var(--garrigue)', fontWeight: 400 }}
            >
              {t('contact')}
            </h4>
            <div
              className="flex flex-col gap-3 text-sm"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            >
              <p style={{ color: 'rgba(212,202,232,0.65)' }}>
                Mas Saint Michel<br />
                Route de Boulbon<br />
                13150 Boulbon, France
              </p>
              <a
                href="tel:+33490931234"
                className="transition-colors"
                style={{ color: 'rgba(212,202,232,0.65)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ocre-soleil)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(212,202,232,0.65)')}
              >
                +33 (0)4 90 93 12 34
              </a>
              <a
                href="mailto:contact@masstmichel.fr"
                className="transition-colors"
                style={{ color: 'rgba(212,202,232,0.65)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ocre-soleil)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(212,202,232,0.65)')}
              >
                contact@masstmichel.fr
              </a>
              <p style={{ color: 'rgba(212,202,232,0.45)', fontSize: '0.8rem' }}>
                Réception : 8h – 21h
              </p>
            </div>

            {/* Language toggle */}
            <div className="mt-6 flex gap-3">
              <Link
                href={`/fr`}
                className={`text-xs tracking-widest uppercase transition-colors ${locale === 'fr' ? '' : 'opacity-50 hover:opacity-100'}`}
                style={{ fontFamily: 'var(--font-body)', color: locale === 'fr' ? 'var(--ocre-soleil)' : 'var(--lavande-pale)' }}
              >
                FR
              </Link>
              <span style={{ color: 'var(--garrigue)' }}>|</span>
              <Link
                href={`/en`}
                className={`text-xs tracking-widest uppercase transition-colors ${locale === 'en' ? '' : 'opacity-50 hover:opacity-100'}`}
                style={{ fontFamily: 'var(--font-body)', color: locale === 'en' ? 'var(--ocre-soleil)' : 'var(--lavande-pale)' }}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: 'var(--encre)', borderTop: '1px solid rgba(92,75,138,0.2)' }}>
        <div className="container-site py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--garrigue)', fontWeight: 300 }}
          >
            © 2026 Mas Saint Michel — Tous droits réservés
          </p>
          <div
            className="flex items-center gap-6 text-xs"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--garrigue)', fontWeight: 300 }}
          >
            <Link
              href={localizedHref('/mentions-legales')}
              className="hover:text-[var(--lavande-pale)] transition-colors"
            >
              {t('legal')}
            </Link>
            <Link
              href={localizedHref('/mentions-legales')}
              className="hover:text-[var(--lavande-pale)] transition-colors"
            >
              {t('cgv')}
            </Link>
            <Link
              href={localizedHref('/mentions-legales')}
              className="hover:text-[var(--lavande-pale)] transition-colors"
            >
              {t('privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
