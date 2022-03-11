const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent-color)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-primary': {
          color: 'var(--text-color)',
        },
        '.text-secondary': {
          color: 'var(--text-secondary-color)',
        },
        '.bg-primary': {
          'background-color': 'var(--bg-color)',
        },
        '.bg-secondary': {
          'background-color': 'var(--bg-secondary-color)',
        },
        '.bg-blur': {
          'background-color': 'var(--bg-transparent)',
          'backdrop-filter': 'saturate(180%) blur(20px)',
        },
      });
    }),
  ],
};
