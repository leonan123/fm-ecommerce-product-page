/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      container: {
        screens: {
          '2xl': '1110px',
        },
      },

      colors: {
        'very-dark-blue': 'hsl(220, 13%, 13%)',
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'grayish-blue': 'hsl(220, 14%, 75%)',
        'light-grayish-blue': 'hsl(223, 64%, 98%)',
      },

      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif'],
      },

      animation: {
        'show-menu-dialog':
          'show-menu-dialog 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'show-dialog': 'show-dialog 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'hide-menu-dialog':
          'hide-menu-dialog 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'hide-dialog': 'hide-dialog 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'overlay-show': 'overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'overlay-hide': 'overlay-hide 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'show-popover': 'show-popover 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'hide-popover': 'hide-popover 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },

      keyframes: {
        'show-menu-dialog': {
          '0%': { opacity: 0, transform: 'translateX(-50%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },

        'hide-menu-dialog': {
          '0%': { opacity: 1, transform: 'translateX(0)' },
          '100%': { opacity: 0, transform: 'translateX(-50%)' },
        },

        'show-dialog': {
          '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },

        'hide-dialog': {
          '0%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
          '100%': {
            opacity: 0,
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
        },

        'show-popover': {
          '0%': { opacity: 0, transform: 'translateY(-05%) scale(0.96)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },

        'hide-popover': {
          '0%': { opacity: 1, transform: 'translateY(0) scale(1)' },
          '100%': {
            opacity: 0,
            transform: 'translateY(-05%) scale(0.96)',
          },
        },

        'overlay-show': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },

        'overlay-hide': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
