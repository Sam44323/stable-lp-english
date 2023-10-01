/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: {
          max: "1200px",
        },
        "large-screen": "3500px",
        "mid-screen": {
          min: "1000px",
          max: "1300px",
        },
      },
      colors: {
        link: {
          inactive: "#130F49",
          active: "#2128BD",
        },
        grey: {
          100: "#707484",
        },
        blue: {
          btn: "#130F49",
          text: "#031250",
          link: "#0160FE",
        },
      },
      backgroundColor: {
        blue: {
          pillBtn: "#0160FE",
        },
      },
      margin: {
        1.5: "0.375rem",
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      width: {
        78: "30.5rem",
        80: "40rem",
      },
      boxShadow: {
        "custom-card":
          "0px 7.837248802185059px 20.899330139160156px 0px #D4E0F0",
      },
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        "be-vietnam-pro": ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
