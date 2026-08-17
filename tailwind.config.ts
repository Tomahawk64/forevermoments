import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F4EEFB',
        surface: '#FAF6FE',
        surfaceLight: '#EDE1F9',
        surfaceLighter: '#F8F2FD',
        primary: '#A855F7',
        primaryLight: '#B07CF0',
        primaryDark: '#8225D4',
        primaryDeep: '#6E1CAE',
        accent: '#BA88F8',
        text: '#1F142E',
        textLight: '#483861',
        textMuted: '#75628F',
        textSoft: '#9F8EBA',
        luxury: {
          dark: '#1F142E',
          lavender: '#F4EEFB',
          lilac: '#B07CF0',
          violet: '#A855F7',
          plum: '#8225D4',
          mist: '#EDE1F9',
        },
      },
      fontFamily: {
        heading: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #E5D2FD, #DDC5FC, #D5B8FB)',
        'gradient-luxury-soft': 'linear-gradient(135deg, #DDC5FC, #E5D2FD, #D5B8FB)',
        'gradient-luxury-warm': 'linear-gradient(135deg, #E5D2FD, #D5B8FB)',
        'gradient-lilac': 'linear-gradient(135deg, #BA88F8, #A855F7, #8225D4)',
        'gradient-lilac-soft': 'linear-gradient(135deg, #B07CF0, #A855F7)',
      },
      boxShadow: {
        'luxury': '0 20px 50px rgba(168, 85, 247, 0.08)',
        'luxury-lg': '0 30px 70px rgba(168, 85, 247, 0.12)',
        'luxury-xl': '0 40px 90px rgba(168, 85, 247, 0.16)',
        'glow': '0 0 30px rgba(176, 124, 240, 0.40)',
        'glow-lg': '0 0 50px rgba(176, 124, 240, 0.55)',
      },
      borderRadius: {
        'luxury': '24px',
        'button': '14px',
        'input': '16px',
      },
      backdropBlur: {
        'luxury': '20px',
        'glass': '18px',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
