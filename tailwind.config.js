const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/icons/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent-color)',
        'accent-highlight': 'var(--accent-highlight-color)',
      },
      maxWidth: {
        '8xl': '90rem',
        '10xl': '110rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/typography'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-primary': {
          color: 'var(--text-color)',
        },
        '.text-secondary': {
          color: 'var(--text-secondary-color)',
        },
        '.text-tertiary': {
          color: 'var(--text-tertiary-color)',
        },
        '.bg-primary': {
          'background-color': 'var(--bg-color)',
        },
        '.bg-secondary': {
          'background-color': 'var(--bg-secondary-color)',
        },
        '.bg-tertiary': {
          'background-color': 'var(--bg-tertiary-color)',
        },
        '.bg-blur': {
          'background-color': 'var(--bg-transparent-color)',
          'backdrop-filter': 'saturate(180%) blur(20px)',
        },
        '.bg-accent': {
          'background-color': 'var(--bg-accent-color)',
        },
      });
    }),
  ],
};
