/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Updated palette matching AYURFEM logo colors
        // Deep forest green from logo + dusty rose accent
        sage: {
          50: '#f4f7f4',
          100: '#e0e8e0',
          200: '#c2d1c2',
          300: '#9ab39a',
          400: '#6e916e',
          500: '#527552',
          600: '#1e5631', // Logo's primary deep green
          700: '#1a4a2a',
          800: '#173d24',
          900: '#14331e',
        },
        rose: {
          50: '#fdf5f4',
          100: '#fbe9e7',
          200: '#f7d5d1',
          300: '#e8b4ae', // Logo's dusty rose/terracotta text
          400: '#d69289',
          500: '#c27872',
          600: '#a85d57',
          700: '#8c4c47',
          800: '#75413d',
          900: '#623a37',
        },
        cream: {
          50: '#fdfcfa',
          100: '#faf6f0', // Logo's parchment background
          200: '#f5ede0',
          300: '#ede0cc',
          400: '#e2cdb0',
          500: '#d4b694',
          600: '#c19c74',
          700: '#a8815a',
          800: '#8a6a4c',
          900: '#725841',
        },
        terracotta: {
          50: '#fdf5f3',
          100: '#fbe8e3',
          200: '#f7d1c7',
          300: '#e8b4ae', // Matches rose-300 for logo text
          400: '#d4918a',
          500: '#c27872',
          600: '#a85d57',
          700: '#8c4c47',
          800: '#75413d',
          900: '#623a37',
        },
        forest: {
          50: '#f0f5f1',
          100: '#dceadf',
          200: '#bbd6c1',
          300: '#8fba99',
          400: '#5f9a6e',
          500: '#3f7d50',
          600: '#1e5631', // Primary logo green
          700: '#1a4a2a',
          800: '#173d24',
          900: '#14331e',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
