import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        jost: ['Jost', 'system-ui', 'sans-serif'],
        playfair: ['Playfair Display SC', 'Georgia', 'serif'],
        // Legacy
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Jost', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Terres & Ocres
        ocre: {
          soleil: 'var(--ocre-soleil)',
          light: 'var(--ocre-light)',
        },
        'terre-sienne': 'var(--terre-sienne)',
        argile: 'var(--argile)',
        // Lavandes
        lavande: {
          profonde: 'var(--lavande-profonde)',
          douce: 'var(--lavande-douce)',
          pale: 'var(--lavande-pale)',
          mist: 'var(--lavande-mist)',
        },
        // Pierres & Neutres
        pierre: {
          chaude: 'var(--pierre-chaude)',
          medium: 'var(--pierre-medium)',
          sombre: 'var(--pierre-sombre)',
        },
        garrigue: 'var(--garrigue)',
        // Verts Provençaux
        olivier: {
          DEFAULT: 'var(--olivier)',
          pale: 'var(--olivier-pale)',
        },
        romarin: 'var(--romarin)',
        cypres: 'var(--cypres)',
        // Profonds
        nuit: 'var(--nuit-provence)',
        encre: 'var(--encre)',
        'brun-mas': 'var(--brun-mas)',
        // Accents
        garance: 'var(--rose-garance)',
        safran: 'var(--safran)',
        // Legacy
        terre: 'var(--ocre-soleil)',
        or: 'var(--ocre-soleil)',
        creme: 'var(--pierre-chaude)',
        blanc: '#FEFCF8',
        charcoal: 'var(--brun-mas)',
        'gris-doux': 'var(--garrigue)',
        'vert-olive': 'var(--olivier)',
        'rouge-mas': 'var(--rose-garance)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '28': '7rem',
        '36': '9rem',
      },
      screens: {
        '3xl': '1920px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'ken-burns': 'kenBurns 8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
