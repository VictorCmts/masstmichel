'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { rooms } from '@/data/rooms';
import { Check } from 'lucide-react';

export default function ReservationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const t = useTranslations('reservation');
  const breadcrumb = useTranslations('breadcrumb');

  const [formData, setFormData] = useState({
    arrival: '',
    departure: '',
    guests: '2',
    room: '',
    name: '',
    email: '',
    phone: '',
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
        body: JSON.stringify({ ...formData, type: 'reservation' }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const advantages = [
    t('adv1'),
    t('adv2'),
    t('adv3'),
    t('adv4'),
  ];

  return (
    <>
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[320px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85"
          alt="Réservation Mas Saint Michel"
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
            <span className="text-white">{breadcrumb('reservation')}</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form — 2/3 */}
            <div className="lg:col-span-2">
              <h2
                className="font-light italic text-[var(--color-charcoal)] mb-8"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)' }}
              >
                {t('directTitle')}
              </h2>

              {status === 'success' ? (
                <div
                  className="bg-[var(--color-vert-olive)]/10 border border-[var(--color-vert-olive)]/30 text-[var(--color-vert-olive)] p-8 text-center"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}
                >
                  Merci ! Votre demande a été envoyée. Nous vous contacterons dans les 24h pour confirmer votre réservation.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-2"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {t('form.arrival')}
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.arrival}
                        onChange={(e) => setFormData({ ...formData, arrival: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--color-pierre)] bg-white text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-terre)] transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-2"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {t('form.departure')}
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.departure}
                        onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--color-pierre)] bg-white text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-terre)] transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-2"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {t('form.guests')}
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--color-pierre)] bg-white text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-terre)] transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>{n} {n > 1 ? 'personnes' : 'personne'}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        className="block text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-2"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {t('form.room')}
                      </label>
                      <select
                        value={formData.room}
                        onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--color-pierre)] bg-white text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-terre)] transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <option value="">{t('form.anyRoom')}</option>
                        {rooms.map((room) => (
                          <option key={room.id} value={room.id}>{room.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                        {t('form.phone')}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--color-pierre)] bg-white text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-terre)] transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {t('form.message')}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--color-pierre)] bg-white text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-terre)] transition-colors resize-none"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-[var(--color-rouge-mas)] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                      Une erreur est survenue. Veuillez réessayer.
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

            {/* Sidebar — 1/3 */}
            <div>
              <div
                className="bg-[var(--color-creme)] p-8 sticky top-28"
              >
                <h3
                  className="font-light italic text-[var(--color-charcoal)] mb-4"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)' }}
                >
                  {t('directTitle')}
                </h3>
                <p
                  className="text-[var(--color-gris-doux)] text-sm mb-6 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {t('directText')}
                </p>
                <h4
                  className="text-xs tracking-widest uppercase text-[var(--color-gris-doux)] mb-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {t('advantages')}
                </h4>
                <ul className="space-y-3">
                  {advantages.map((adv, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[var(--color-charcoal)]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <Check size={14} className="text-[var(--color-vert-olive)] mt-0.5 flex-shrink-0" />
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
