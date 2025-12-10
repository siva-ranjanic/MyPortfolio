/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc', // slate-50
        surface: '#ffffff',
        primary: {
          DEFAULT: '#0284c7', // sky-600
          hover: '#0ea5e9', // sky-500
          light: '#e0f2fe', // sky-100
        },
        secondary: {
          DEFAULT: '#64748b', // slate-500
          hover: '#475569', // slate-600
          light: '#f1f5f9', // slate-100
        },
        accent: {
          DEFAULT: '#f43f5e', // rose-500
          hover: '#e11d48', // rose-600
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
