/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        'warm-white': '#FFFDF9',
        'earth-dark': '#1C1710',
        'earth-mid': '#4A4035',
        'earth-light': '#9A8E7E',
        'border-warm': '#E8DCC8',
        gold: {
          DEFAULT: '#C4943A',
          light: '#D4A94A',
          dark: '#A47820',
          50: '#FDF8EE',
          100: '#F9EDCE',
        },
        sage: {
          DEFAULT: '#7B8C5A',
          light: '#A0B07A',
          dark: '#5A6B3E',
          50: '#F4F6F0',
          100: '#E5EAD9',
        },
        terra: {
          DEFAULT: '#C4603A',
          light: '#D4804A',
          dark: '#A04525',
          50: '#FDF4EF',
          100: '#FAE4D4',
        },
        lavender: {
          DEFAULT: '#8B7BA8',
          light: '#A99BC0',
          dark: '#6B5B88',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
