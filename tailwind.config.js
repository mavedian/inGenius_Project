/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Chemin pour vos fichiers HTML/JS
  safelist: [
    // Couleurs de texte
    'text-text-primary',
    'text-base',
    'text-h2',
    'text-sm',
  
    // Couleurs de fond
    'bg-blue-50',
    'bg-gray-200',
  
    // Polices et styles de texte
    'font-sans',
    'font-bold',
    'font-medium',
    'font-semibold',
    'tracking-wider',
    'leading-tight',
  
    // Espacements et tailles
    'w-6',
    'h-6',
    'w-3.5',
    'h-3.5',
    'w-96',
    'h-56',
    'h-28',
    'h-20',
    'h-24',
    'h-32',
    'h-60',
    'h-64',
    'gap-4',
    'gap-6',
    'gap-8',
    'gap-12',
    'gap-1.5',
    'p-3',
    'rounded-md',
    'rounded-xl',
  
    // Flexbox
    'flex',
    'inline-flex',
    'flex-col',
    'justify-start',
    'justify-center',
    'justify-end',
    'items-start',
    'items-center',
    'items-end',
    'self-stretch',
  
    // Alignement de texte
    'text-right',
  ],
  
  theme: {
    
    extend: {
      // Palette de couleurs
      colors: {
        'text-primary': '#F4E8D3', // White
        'text-black': '#181818', // Black
        'blue': {
          DEFAULT: '#007CFF',
          50: 'rgba(0, 124, 255, 0.5)',
          30: 'rgba(0, 124, 255, 0.3)',
          20: 'rgba(0, 124, 255, 0.2)',
        },
        'secondary-blue': {
          DEFAULT: '#1B3A4F',
          50: 'rgba(27, 58, 79, 0.5)',
          30: 'rgba(27, 58, 79, 0.3)',
          20: 'rgba(27, 58, 79, 0.2)',
        },
        'gold': '#C89933', // Or
        'background': {
          primary: '#181818',
          primary50: 'rgba(24, 24, 24, 0.5)',
          primary30: 'rgba(24, 24, 24, 0.3)',
          primary20: 'rgba(24, 24, 24, 0.2)',
        },
      },
      // Typographie
      fontFamily: {
        'sans': ["'IBM Plex Sans'", 'sans-serif'], // Police principale
        'din': ["'DIN Next W1G'", 'sans-serif'],   // Seconde police
      },
      // Espacement ou tracking pour les titres
      letterSpacing: {
        wider: '0.05em',
      },
      // Tailles de police
      fontSize: {
        h1: ['20px', '1.5px'], // Exemple de style H1
        h2: ['18px', '1.5px'],
        h3: ['16px', '1.3px'],
        h4: ['14px', '0px'],
        h4b: ['28px', '1.3px'], // H4 alternatif
      },
    },
  },
  plugins: [],
};
