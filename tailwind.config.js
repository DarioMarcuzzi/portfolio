/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1F2025",
        light: "#F5F5F5",
        primary: "#F5F5F5",
        secondary: "#1F1F1F",
        "primary-100": "#F5F5F5",
        "primary-200": "#E5E5E5",
        "primary-300": "#D4D4D4",
        accent: '#ff8c00', // Color de acento
        accentDark: '#ff7000' // Color de acento oscuro
      },
      tooltip: {
        position: 'relative',
        display: 'inline-block',
      },
      'tooltip:after': {
        content: 'attr(title)',
        display: 'block',
      },
      boxShadow: {
        // otras sombras
        slick: "0 10px 20px -5px rgba(0, 0, 0, 0.75)",
      },
      // backgroundImage:{
      //   'mancha': "url('https://res.cloudinary.com/dcpcja2qg/image/upload/v1681068503/Dise%C3%B1o_sin_t%C3%ADtulo__1_-removebg-preview_xjzgdi.png')",
      // }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};