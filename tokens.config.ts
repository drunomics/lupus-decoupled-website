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
    gray: {
      50: '#ffffff',
      100: '#f1f5f9',
      300: '#e2e8f0',
      400: '#2563eb',
      500: '#475569',
      600: '#1d4ed8',
      700: '#1e293b',
      900: '#1e293b',

    }
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
