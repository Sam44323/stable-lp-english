/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        link: {
          inactive: "#130F49",
          active: "#2128BD",
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
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
