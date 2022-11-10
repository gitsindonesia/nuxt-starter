const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const primary = {
  DEFAULT: '#28A0F6',
  50: '#D8EEFD',
  100: '#C5E5FD',
  200: '#9DD4FB',
  300: '#76C3F9',
  400: '#4FB1F8',
  500: '#28A0F6',
  600: '#0984DD',
  700: '#0764A7',
  800: '#054471',
  900: '#02233B',
  black: '#3F3F3F',
  red: '#EB2139',
  blue: '#1A73B5',
}

const secondary = {
  DEFAULT: '#FF8B49',
  50: '#FFFFFF',
  100: '#FFF3EC',
  200: '#FFD9C3',
  300: '#FFBF9B',
  400: '#FFA572',
  500: '#FF8B49',
  600: '#FF6711',
  700: '#D84E00',
  800: '#A03A00',
  900: '#682600',
}

module.exports = {
  theme: {
    extend: {
      colors: {
        primary,
        secondary,
        info: colors.sky,
        success: colors.emerald,
        warning: colors.yellow,
        error: colors.rose,
      },
      fontFamily: {
        sans: [
          'Poppins',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      boxShadow: {
        card: '0px 0px 30px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  presets: [
    require('@gits-id/tailwind-config/preset'),
  ],
}
