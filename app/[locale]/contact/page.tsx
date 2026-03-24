'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const t = useTranslations('contact');
  const breadcrumb = useTranslations('breadcrumb');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dates: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', dates: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85"
          alt="Contact Mas Saint Michel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <nav
            className="flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <Link href={`/${locale}`} className="hover:text-white transition-colors">
              {breadcrumb('home')}
            </Link>
            <span>/</span>
            <span className="text-white">{breadcrumb('contact')}</span>
          </nav>
          <span
            className="text-white/70 text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('label')}
          </span>
          <h1
            className="text-white font-light italic mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)' }}
          >
            {t('heroTitle')}
          </h1>
          <p
            className="text-white/70 max-w-md"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('heroSubtitle')}
          </p>
        </div>
      </div>

      {/* Main */}
      <section className="py-24 bg-[var(--color-blanc)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2
                className="font-light italic text-[var(--color-charcoal)] mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)' }}
              >
                {t('title')}
              </h2>
              <p
                className="text-[var(--color-gris-doux)] mb-8"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {t('subtitle')}
              </p>

              {status === 'success' ? (
                <div
                  className="bg-[var(--color-vert-olive)]/10 border border-[var(--color-vert-olive)]/30 text-[var(--color-vert-olive)] p-6"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {t('form.success')}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {t('form.name')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--color-pierre)] bg-white text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-terre)] transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {t('form.email')}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--color-pierre)] bg-white text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-terre)] transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {t('form.dates')}
                    </label>
                    <input
                      type="text"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      placeholder="ex. 15 - 18 juillet 2026"
                      className="w-full px-4 py-3 border border-[var(--color-pierre)] bg-white text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-terre)] transition-colors placeholder-[var(--color-pierre)]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {t('form.message')}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--color-pierre)] bg-white text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-terre)] transition-colors resize-none"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                  {status === 'error' && (
                    <p
                      className="text-[var(--color-rouge-mas)] text-sm"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {t('form.error')}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full disabled:opacity-50"
                  >
                    {loading ? '...' : t('form.submit')}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3
                  className="font-light italic text-[var(--color-charcoal)] mb-6"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)' }}
                >
                  Mas Saint Michel
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-[var(--color-terre)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-1"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {t('info.address')}
                      </p>
                      <p
                        className="text-[var(--color-charcoal)]"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        Boulbon, 13150<br />
                        Provence-Alpes-Côte d&rsquo;Azur
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone size={18} className="text-[var(--color-terre)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-1"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {t('info.phone')}
                      </p>
                      <a
                        href="tel:+33400000000"
                        className="text-[var(--color-charcoal)] hover:text-[var(--color-terre)] transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        +33 (0)4 XX XX XX XX
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail size={18} className="text-[var(--color-terre)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-1"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {t('info.email')}
                      </p>
                      <a
                        href="mailto:contact@masstmichel.fr"
                        className="text-[var(--color-charcoal)] hover:text-[var(--color-terre)] transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        contact@masstmichel.fr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={18} className="text-[var(--color-terre)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-1"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {t('info.hours')}
                      </p>
                      <p
                        className="text-[var(--color-charcoal)]"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {t('info.hoursValue')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-[var(--color-creme)] aspect-[4/3] flex items-center justify-center">
                <a
                  href="https://maps.google.com/?q=Boulbon+13150+France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark"
                >
                  Voir sur Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
