/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      screens: {
        ss: "400px",
        sm: "550px",
        md: "768px",
        lg: "991px",
        xl: "1024px",
        device: "1040px",
        "14m": "1440px",
        "2xl": "1280px",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
      keyframes: {
        rotated: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)'},
          '50%': { transform: 'translateX(4px) translateY(-4px)'},
        }

      },
      animation: {
        rotated: 'rotated 0.6s ease-in-out',
      }
    },
  },
  plugins: [],
};
