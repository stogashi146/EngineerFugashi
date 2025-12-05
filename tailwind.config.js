/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#80999C',
        base: '#FFFFFF',
        main: '#F2F5F5',
        text: '#454545',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        noto: ['var(--font-noto-sans)', 'sans-serif'],
        'noto-jp': ['var(--font-noto-sans-jp)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
