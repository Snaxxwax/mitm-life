/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Consolas', '"Liberation Mono"', 'Menlo', 'monospace']
      },
      colors: {
        background: 'hsl(222.2, 84%, 4.9%)',
        foreground: 'hsl(210, 40%, 98%)',
        card: 'hsl(222.2, 84%, 4.9%)',
        'card-foreground': 'hsl(210, 40%, 98%)',
        popover: 'hsl(222.2, 84%, 4.9%)',
        'popover-foreground': 'hsl(210, 40%, 98%)',
        primary: 'hsl(210, 40%, 98%)',
        'primary-foreground': 'hsl(222.2, 84%, 4.9%)',
        secondary: 'hsl(217.2, 32.6%, 17.5%)',
        'secondary-foreground': 'hsl(210, 40%, 98%)',
        muted: 'hsl(217.2, 32.6%, 17.5%)',
        'muted-foreground': 'hsl(215, 20.2%, 65.1%)',
        accent: 'hsl(217.2, 32.6%, 17.5%)',
        'accent-foreground': 'hsl(210, 40%, 98%)',
        destructive: 'hsl(0, 62.8%, 30.6%)',
        'destructive-foreground': 'hsl(210, 40%, 98%)',
        border: 'hsl(217.2, 32.6%, 17.5%)',
        input: 'hsl(217.2, 32.6%, 17.5%)',
        ring: 'hsl(212.7, 26.8%, 83.9%)',
        red: {
          400: 'hsl(0, 84%, 66%)',
          500: 'hsl(0, 84%, 60%)',
          600: 'hsl(0, 84%, 54%)',
          700: 'hsl(0, 84%, 48%)',
          950: 'hsl(0, 84%, 10%)'
        },
        blue: {
          400: 'hsl(217, 91%, 69%)',
          500: 'hsl(217, 91%, 60%)',
          600: 'hsl(217, 91%, 54%)',
          950: 'hsl(217, 91%, 10%)'
        },
        purple: {
          400: 'hsl(262, 83%, 69%)',
          500: 'hsl(262, 83%, 58%)',
          600: 'hsl(262, 83%, 52%)',
          950: 'hsl(262, 83%, 10%)'
        },
        green: {
          400: 'hsl(134, 61%, 51%)',
          500: 'hsl(134, 61%, 41%)',
          600: 'hsl(134, 61%, 31%)',
          950: 'hsl(134, 61%, 10%)'
        },
        yellow: {
          400: 'hsl(45, 93%, 58%)',
          500: 'hsl(45, 93%, 47%)',
          600: 'hsl(45, 93%, 37%)'
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2rem'
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px'
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'float-up': 'float-up 0.6s ease-out',
        'slide-in-up': 'slide-in-up 0.6s ease-out forwards',
        'checkmark-bounce': 'checkmark-bounce 0.6s ease-in-out',
        'progress-flow': 'progress-flow 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'scan': 'scan 2s ease-in-out',
        'ring': 'ring 1s ease-in-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'glitch': 'glitch 0.3s',
        'particle-burst': 'particle-burst 1s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'terminal-type': 'terminal-type 2s steps(40, end)',
        'reveal': 'reveal 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'cyber-border-flow': 'cyber-border-flow 3s ease infinite',
        'confetti-fall': 'confetti-fall 3s linear',
        'code-scan': 'code-scan 2s infinite'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true
  }
}