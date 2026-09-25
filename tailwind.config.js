/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          magenta: '#D91B75',
          dark: '#1A212D',
          footer: '#131922',
          cardBorder: '#E5E7EB',
          textPrimary: '#111827',
          textMuted: '#525B6A',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
