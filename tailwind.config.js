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
          DEFAULT: '#4f46e5', // indigo-600
          hover: '#4338ca', // indigo-700
          light: '#e0e7ff', // indigo-100
        },
        secondary: {
          DEFAULT: '#64748b', // slate-500
          hover: '#475569', // slate-600
          light: '#f1f5f9', // slate-100
        },
        accent: '#0ea5e9', // sky-500
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
