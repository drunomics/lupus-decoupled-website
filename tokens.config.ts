import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
    black: '#1E293B',
    white: '#ffffff',
    primary: {
      100: '#2563EB',
      200: '#2563EB',
      300: '#2563EB',
      400: '#2563EB',
      500: '#2563EB',
      600: '#2563EB',
      700: '#2563EB',
      800: '#2563EB',
      900: '#2563EB',
    },
    red: {
      500: '#2563EB',
    },
  },
  docus: {
    body: {
      backgroundColor: {
        initial: '{color.white}',
        dark: '#334155'
      },
      color: {
        initial: '#475569',
        dark: '#CBD5E1',
      },
    },
  },
})
