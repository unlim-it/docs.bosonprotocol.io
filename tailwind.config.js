const colors = require('tailwindcss/colors');

module.exports = {
  purge: false,
  theme: {
    inset: {
      '0': 0,
      auto: 'auto',
      '2': '0.5rem',
      '4': '1rem',
      '7': '1.75rem'
    },
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
      colors: {
        'icon-gray': '#364353',
        'rule-gray': '#C3CDD8',
        'control-gray-light': '#EFF2F4',
        'control-gray-dark': '#708096',
        'navigation-gray-light': '#FCFCFC',
        'navigation-gray-dark': '#EFF2F4',
        'brand-purple': '#6061C6',
        'brand-teal': '#71E7DE',
        'brand-green': '#8AF0C5'
      },
      typography: {
        DEFAULT: {
          css: {
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
              fontWeight: '400'
            },
            a: {
              fontWeight: '400'
            },
            strong: {
              fontWeight: '500'
            },
            blockquote: {
              fontWeight: '400'
            },
            thead: {
              fontWeight: '500'
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
