const colors = require('tailwindcss/colors');

module.exports = {
  purge: false,
  darkMode: 'class',
  theme: {
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': '#161B21',
      'white': colors.white,
      'gray': colors.coolGray,
      'indigo': colors.indigo,
      'red': colors.red,
      'yellow': colors.amber,
      'green': colors.emerald,
      'blue': colors.blue,
      'purple': colors.purple,
      'pink': colors.pink
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'brand-teal': '#71E7DE',
      'brand-green': '#8AF0C5'
    }),
    fontFamily: {
      sans: [
        'Barlow',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif'
      ],
      mono: [
        'Roboto Mono',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    minWidth: {
      0: '0px',
      12: '3rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
    },
    extend: {
      backgroundImage: theme => ({
        'light-icon': "url(/images/light-icon.png)",
        'dark-icon': "url(/images/dark-icon.png)"
      }),
      inset: {
        '0': 0,
        auto: 'auto',
        '2': '0.5rem',
        '4': '1rem',
        '4.5': '1.125rem',
        '7': '1.75rem'
      },
      spacing: {
        '4.5': '1.125rem'
      },
      boxShadow: {
        lg: '0 4px 20px 0px rgba(39, 43, 48, 0.1)',
        'inner-right': 'inset -4px 0 20px -4px rgba(39, 43, 48, 0.1)'
      },
      colors: {
        'icon-gray': '#364353',
        'icon-gray-light': '#90a5be',
        'rule-gray': '#C3CDD8',
        'control-gray-light': '#EFF2F4',
        'control-gray-dark': '#708096',
        'navigation-gray-light': '#FCFCFC',
        'navigation-gray-dark': '#EFF2F4',
        'navigation-gray-darker': '#E0E5E9',
        'brand-purple': {
          100: '#AB80F0', // <-
          'DEFAULT': '#6061C6',
          500: '#6061C6',
          550: '#363651',
          600: '#202032',
          650: '#2C2C44',
          700: '#2F2F47',
          800: '#1D1D2C',
          900: '#191927'
        },
        'brand-blue': {
          'DEFAULT': '#3478F6', // <-
          700: '#0046C8'
        },
        'brand-teal': {
          400: '#5FCCCA', // <-
          'DEFAULT': '#71E7DE',
          700: '#00AFAC'
        },
        'brand-green': {
          400: '#80F0BE', // <-
          'DEFAULT': '#8AF0C5',
          600: '#64C97A', // <-
          650: '#14C33B',
          700: '#00A059'
        },
        'brand-aqua': {
          'DEFAULT': '#5AC8FA', // <-
          700: '#0099DF'
        },
        'brand-orange': {
          'DEFAULT': '#EC7A3A', // <-
          700: '#EC7A3A'
        },
        'brand-yellow': {
          'DEFAULT': '#F7B046', // <-
          700: '#F3980E'
        },
        'brand-pink': {
          'DEFAULT': '#FF7686', // <-
          700: '#E0293F'
        }
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            maxWidth: '80ch',
            a: {
              fontWeight: '600',
              textDecoration: 'none',
              color: theme('colors.brand-purple.DEFAULT'),
              '&:hover': {
                color: theme('colors.brand-purple.DEFAULT'),
              },
            },
            strong: {
              fontWeight: '500'
            },
            blockquote: {
              fontWeight: '400',
              fontStyle: 'normal',
              color: theme('colors.icon-gray'),
              borderLeftWidth: '0.25rem',
              borderLeftColor: theme('colors.brand-teal.DEFAULT'),
            },
            h1: {
              fontWeight: '700'
            },
            h2: {
              fontWeight: '600'
            },
            h3: {
              fontWeight: '500'
            },
            h4: {
              fontWeight: '400'
            },
            code: {
              color: 'inherit',
              fontWeight: '400'
            },
            pre: {
              backgroundColor: theme('colors.control-gray-light')
            },
            thead: {
              fontWeight: '500'
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:last-of-type::after': {
              content: 'none',
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.rule-gray'),
            a: {
              color: theme('colors.brand-green.400'),
              '&:hover': {
                color: theme('colors.brand-green.400'),
              },
            },
            strong: {
              color: theme('colors.rule-gray')
            },
            blockquote: {
              color: theme('colors.rule-gray'),
              borderLeftColor: theme('colors.brand-green.400')
            },
            pre: {
              backgroundColor: theme('colors.brand-purple.700')
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
          },
        },
      })
    }
  },
  variants: {
    extend: {
      display: ['dark'],
      typography: ['dark'],
      backgroundOpacity: ['dark'],
      borderOpacity: ['dark'],
      borderWidth: ['dark'],
      fill: ['dark'],
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
