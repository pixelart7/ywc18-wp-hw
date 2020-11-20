module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: 'ibm-plex-thai, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      maxWidth: {
        container: '1240px',
        'container-xl': '1600px',
      },
      colors: {
        primary: {
          50: '#F4F5F8',
          100: '#EAEBF2',
          200: '#C9CEDE',
          300: '#A9B1CB',
          400: '#6976A3',
          500: '#283B7C',
          600: '#243570',
          700: '#18234A',
          800: '#121B38',
          900: '#0C1225',
        },
        green: {
          50: '#F4FCF2',
          100: '#E9F9E6',
          200: '#C7F0BF',
          300: '#A6E799',
          400: '#63D54D',
          500: '#20C300',
          600: '#1DB000',
          700: '#137500',
          800: '#0E5800',
          900: '#0A3B00',
        },
        teal: {
          50: '#F7FCFE',
          100: '#EEF8FD',
          200: '#D5EEFA',
          300: '#BBE4F7',
          400: '#88D0F0',
          500: '#55BCEA',
          600: '#4DA9D3',
          700: '#33718C',
          800: '#265569',
          900: '#1A3846',
        },
        'light-blue': {
          50: '#F3FAFF',
          100: '#E8F4FF',
          200: '#C5E4FF',
          300: '#A2D3FF',
          400: '#5DB2FF',
          500: '#1791FF',
          600: '#1583E6',
          700: '#0E5799',
          800: '#0A4173',
          900: '#072C4D',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
