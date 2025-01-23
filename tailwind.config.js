/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login:
          "url('https://images.pexels.com/photos/29878674/pexels-photo-29878674/free-photo-of-stylish-couple-in-urban-setting-wearing-leather.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load')",
        register:
          "url('https://images.pexels.com/photos/29433057/pexels-photo-29433057/free-photo-of-romantic-embrace-on-antalya-beach-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load')",
        grad: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)",
      },
      colors: {
        grey: {
          0: "#FFFFFF",
          10: "#F6F6F6",
          50: "#F0F0F0",
          100: "#E0E0E0",
          200: "#C2C2C2",
          300: "#A3A3A3",
          400: "#858585",
          500: "#666666",
          600: "#4D4D4D",
          700: "#333333",
          800: "#1A1A1A",
          900: "#0A0A0A",
          1000: "#000000",
        },
        primary: {
          50: "#E6FBFF",
          100: "#CCF7FE",
          200: "#99EEFD",
          300: "#66E6FC",
          400: "#33DDFB",
          500: "#00D5FA",
          600: "#00A0BC",
          700: "#006B7D",
          800: "#00353F",
          900: "#001519",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
