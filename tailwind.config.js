const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  presets: [
    require('@morpheme/tailwind-config/preset'),
  ],
}
