/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette personnalisée selon vos consignes
        'gallery': {
          'bg': '#1E1E1E',        // Fond principal gris foncé
          'card': '#2A2A2A',      // Fond des cartes gris anthracite
          'border': '#141414',    // Bordures très foncées
          'nav': '#1B1B1B',      // Navigation très foncée
        },
        'sage': {
          'DEFAULT': '#6A8B74',   // Vert sauge désaturé
          'dark': '#58705E',      // Vert sauge plus foncé pour hover
        },
        'brick': {
          'DEFAULT': '#B74E46',   // Rouge brique doux
        },
        'gold': {
          'DEFAULT': '#CFAE50',   // Jaune doré discret
        },
        'text': {
          'primary': '#F5F5F5',   // Blanc cassé pour titres
          'secondary': '#CCCCCC', // Gris clair pour descriptions
        }
      },
      fontFamily: {
        'title': ['"Playfair Display"', 'serif'],     // Titres artistiques élégants
        'body': ['Inter', 'sans-serif'],              // Texte principal ultra-lisible
      }
    },
  },
  plugins: [],
}