module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    // Aquí asegúrate de que estén los archivos donde usas Tailwind
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem', // 1440px, por ejemplo
    },
    fontFamily: {
      display: ['"Gilda Display"', 'serif'],
    },
  },
  plugins: [],
}
}