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
        background: '#FAFAFC',
        surface: '#F7F3FF',
        surfaceLight: '#F4E8FF',
        surfaceLighter: '#F6F4FA',
        primary: '#CB94F7',
        primaryLight: '#D8AFFF',
        primaryDark: '#A76DFF',
        primaryDeep: '#7C3AED',
        accent: '#E9D6FF',
        text: '#1F1235',
        textLight: '#2E1A47',
        textMuted: '#6B4C7A',
        textSoft: '#9B7AA8',
        luxury: {
          dark: '#24153D',
          cream: '#F7F4FF',
          lavender: '#EDD8FF',
        },
      },
      fontFamily: {
        heading: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #FFFFFF, #F8F2FF, #EDD8FF, #CB94F7)',
        'gradient-luxury-soft': 'linear-gradient(135deg, #F7F4FF, #FFFFFF, #F3E4FF)',
        'gradient-luxury-dark': 'linear-gradient(135deg, #24153D, #1F1235)',
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(70, 20, 120, 0.08)',
        'luxury-lg': '0 30px 80px rgba(70, 20, 120, 0.12)',
        'luxury-xl': '0 40px 100px rgba(70, 20, 120, 0.15)',
        'glow': '0 0 30px rgba(203, 148, 247, 0.3)',
        'glow-lg': '0 0 50px rgba(203, 148, 247, 0.4)',
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
