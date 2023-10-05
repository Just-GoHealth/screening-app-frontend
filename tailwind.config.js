/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#993399",
        primaryLight: "#c19dc9",
        primaryBlue: "#003399",
        bgLightBlue: "#93aedb",
        primaryGray: "#ACAEB0",
      },
      borderWidth: {
        6: "6px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      midxl: "1200px",
    },
  },
  plugins: [],
};
