'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    arrivee: '',
    depart: '',
    hebergement: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-section-alt overflow-hidden">
      <div className="container-site">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-4">Réservation</p>
          <h2
            className="section-title text-earth-dark mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Réserver votre séjour
          </h2>
          <p className="font-cormorant italic text-earth-mid mx-auto max-w-lg"
            style={{ fontSize: '1.25rem' }}>
            Contactez-nous pour vérifier les disponibilités et nous faire part
            de vos souhaits. Nous vous répondrons dans les meilleurs délais.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Contact Info */}
          <div className="lg:col-span-2 reveal-left">

            {/* Address card */}
            <div className="bg-earth-dark p-8 mb-6">
              <p className="font-inter text-[0.625rem] tracking-[0.22em] uppercase text-gold font-semibold mb-5">
                Coordonnées
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-white/10 flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="opacity-60">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-inter text-white/90 text-sm leading-relaxed">
                      1142 Chemin des Mauvares<br />
                      13840 Rognes<br />
                      Bouches-du-Rhône, Provence
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-white/10 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="opacity-60">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.01 6.01l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <a
                    href="tel:+33642271234"
                    className="font-inter text-white/90 text-sm hover:text-gold transition-colors"
                  >
                    +33 6 42 27 12 34
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-white/10 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="opacity-60">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <a
                    href="mailto:contact@mas-saintmichel.com"
                    className="font-inter text-white/90 text-sm hover:text-gold transition-colors"
                  >
                    contact@mas-saintmichel.com
                  </a>
                </div>
              </div>
            </div>

            {/* Practical info */}
            <div className="space-y-4">
              {[
                { label: 'Arrivée', value: 'À partir de 17h00' },
                { label: 'Départ', value: 'Avant 10h00' },
                { label: 'Langues', value: 'Français, Espagnol, Anglais' },
                { label: 'Paiement', value: 'CB, virement, espèces' },
              ].map((info) => (
                <div
                  key={info.label}
                  className="flex items-center justify-between py-3.5 border-b border-border-warm"
                >
                  <span className="font-inter text-[0.6875rem] tracking-[0.12em] uppercase text-earth-light">
                    {info.label}
                  </span>
                  <span className="font-inter text-earth-dark text-sm font-medium">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              className="mt-6 relative overflow-hidden"
              style={{
                height: '180px',
                background: 'linear-gradient(135deg, #E5EAD9 0%, #C4943A20 50%, #F4F6F0 100%)',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold/60">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <p className="font-inter text-earth-mid text-xs tracking-wide">Rognes, Bouches-du-Rhône</p>
                <a
                  href="https://maps.google.com/?q=1142+Chemin+des+Mauvares+13840+Rognes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-[0.625rem] tracking-[0.15em] uppercase text-gold underline"
                >
                  Voir sur Google Maps
                </a>
              </div>
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(rgba(123,140,90,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(123,140,90,0.3) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal-right">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-border-warm bg-warm-white">
                <div className="w-16 h-16 bg-sage/10 flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-sage">
                    <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="font-playfair text-earth-dark text-2xl mb-4">Message envoyé !</h3>
                <p className="font-inter text-earth-mid text-sm leading-relaxed max-w-sm">
                  Merci pour votre demande. Jacques et Vicenta vous répondront
                  dans les meilleurs délais pour confirmer les disponibilités.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-warm-white border border-border-warm p-8 lg:p-10">
                <h3 className="font-playfair text-earth-dark text-xl mb-8" style={{ fontWeight: 400 }}>
                  Demande de réservation
                </h3>

                {/* Name row */}
                <div className="grid sm:grid-cols-2 gap-6 mb-7">
                  <div>
                    <label className="form-label">Prénom *</label>
                    <input
                      type="text"
                      name="prenom"
                      value={form.prenom}
                      onChange={handleChange}
                      placeholder="Votre prénom"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Nom *</label>
                    <input
                      type="text"
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Contact row */}
                <div className="grid sm:grid-cols-2 gap-6 mb-7">
                  <div>
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Téléphone</label>
                    <input
                      type="tel"
                      name="telephone"
                      value={form.telephone}
                      onChange={handleChange}
                      placeholder="+33 6 00 00 00 00"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Dates row */}
                <div className="grid sm:grid-cols-2 gap-6 mb-7">
                  <div>
                    <label className="form-label">Date d&apos;arrivée</label>
                    <input
                      type="date"
                      name="arrivee"
                      value={form.arrivee}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Date de départ</label>
                    <input
                      type="date"
                      name="depart"
                      value={form.depart}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Hébergement */}
                <div className="mb-7">
                  <label className="form-label">Hébergement souhaité</label>
                  <select
                    name="hebergement"
                    value={form.hebergement}
                    onChange={handleChange}
                    className="form-input bg-transparent cursor-pointer"
                  >
                    <option value="">Sélectionnez un hébergement</option>
                    <option value="pointe-rouge">Chambre — La Pointe Rouge</option>
                    <option value="joliette">Chambre — La Joliette</option>
                    <option value="bastidon">Chambre — Le Bastidon</option>
                    <option value="gite-charme">Gîte de Charme (70 m²)</option>
                    <option value="gite-piscine">Gîte de la Piscine (50 m²)</option>
                    <option value="indifferent">Pas de préférence</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Nombre de personnes, demandes particulières, questions..."
                    rows={4}
                    className="form-input resize-none"
                    style={{ borderBottom: 'none', border: '1.5px solid var(--border)', padding: '12px' }}
                  />
                </div>

                <button type="submit" className="btn btn-gold w-full justify-center">
                  Envoyer ma demande
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>

                <p className="font-inter text-earth-light text-[0.6875rem] text-center mt-4">
                  En envoyant ce formulaire, vous acceptez d&apos;être contacté par le Mas Saint Michel
                  pour répondre à votre demande.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
