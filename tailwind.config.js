/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Deep Sapphire / Midnight palette ──────────────────────
        sapphire: {
          950: '#03050e',
          900: '#060c1c',
          850: '#080f22',
          800: '#0d1630',
          700: '#12203f',
          600: '#192c54',
        },
        obsidian: {
          950: '#050507',
          900: '#0a0a0f',
          800: '#111118',
        },

        // ── Champagne / Gold luxury accent ────────────────────────
        champagne: {
          DEFAULT: '#d4aa70',
          100: '#fdf5e6',
          200: '#f5dfa0',
          300: '#e8c87a',
          400: '#d4aa70',
          500: '#c09050',
          600: '#a07838',
          700: '#7a5c28',
        },
        gold: {
          DEFAULT: '#C9A961',
          100: '#f5edd8',
          200: '#e8d5a3',
          300: '#dcc07a',
          400: '#C9A961',
          500: '#b8924a',
          600: '#8B6F3F',
          700: '#6b5230',
        },

        // ── Platinum / Silver tones ───────────────────────────────
        platinum: {
          DEFAULT: '#d0d0d8',
          100: '#f4f4f6',
          200: '#e0e0e6',
          300: '#c4c4ce',
          400: '#9898a8',
          500: '#707080',
        },

        // ── Pearl / Cream tones ───────────────────────────────────
        pearl: {
          DEFAULT: '#F5F0E8',
          100: '#F5F0E8',
          200: '#e8e2d8',
          300: '#d8d0c0',
          400: '#b8b0a0',
        },

        // ── Cream ─────────────────────────────────────────────────
        cream: {
          DEFAULT: '#F5F0E8',
          100: '#F5F0E8',
          200: '#e8e2d8',
        },
        muted: {
          DEFAULT: '#A8A29A',
        },
        emerald: {
          DEFAULT: '#10b981',
          400: '#34d399',
          950: '#022c22',
        },
      },

      fontFamily: {
        serif:  ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans:   ['"Cinzel"', '"Montserrat"', 'system-ui', 'sans-serif'],
        body:   ['"Inter"', 'sans-serif'],
        mono:   ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },

      backgroundImage: {
        // Navbar / hero radial
        'sapphire-radial': 'radial-gradient(ellipse at 50% -10%, rgba(30,50,120,0.55) 0%, #03050e 70%)',
        'emerald-radial':  'radial-gradient(ellipse at 60% 0%, rgba(4,60,30,0.50) 0%, #03050e 65%)',
        'gold-foil':       'linear-gradient(135deg, #f5edd8 0%, #C9A961 40%, #8B6F3F 80%, #C9A961 100%)',
        'dark-glass':      'linear-gradient(145deg, rgba(6,12,28,0.90) 0%, rgba(3,5,14,0.97) 100%)',
        'champagne-foil':  'linear-gradient(135deg, #fdf5e6 0%, #e8c87a 40%, #a07838 80%, #d4aa70 100%)',
      },

      boxShadow: {
        'champagne-glow':    '0 0 22px rgba(212,170,112,0.28)',
        'champagne-glow-lg': '0 0 50px rgba(212,170,112,0.45)',
        'gold-glow':         '0 0 25px rgba(201,169,97,0.30)',
        'gold-glow-lg':      '0 0 55px rgba(201,169,97,0.50)',
        'sapphire-glow':     '0 0 30px rgba(30,50,150,0.35)',
        'inner-sapphire':    'inset 0 0 20px rgba(30,50,150,0.20)',
        'inner-gold':        'inset 0 0 20px rgba(201,169,97,0.15)',
      },

      animation: {
        'float':            'float 5s ease-in-out infinite',
        'float-slow':       'float 8s ease-in-out infinite',
        'pulse-slow':       'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee':          'marquee 28s linear infinite',
        'shimmer':          'shimmer 2.5s linear infinite',
        'fade-in-up':       'fadeInUp 0.7s ease forwards',
        'glow-pulse':       'glowPulse 3s ease-in-out infinite',
        'spin-slow':        'spin 9s linear infinite',
        'border-glow':      'borderGlow 3s ease-in-out infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,170,112,0.25)' },
          '50%':      { boxShadow: '0 0 50px rgba(212,170,112,0.55)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(212,170,112,0.30)' },
          '50%':      { borderColor: 'rgba(212,170,112,0.70)' },
        },
      },

      scale: { '102': '1.02', '103': '1.03', '108': '1.08' },
    },
  },
  plugins: [],
}
