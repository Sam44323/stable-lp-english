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
        900: "900",
      },
      width: {
        78: "30.5rem",
        80: "40rem",
      },
    },
  },
  plugins: [],
};
