/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",

        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "gradient-linear":
          "linear-gradient(270deg, #1C1D22 0%, #1C1D22 50%, #F0F0F0 50%, #F0F0F0 100%)",
      },

      colors: {
        "primary-black": "#1C1D22",
        "primary-white": "#F0F0F0",
        primary: "#6CCBB9",
      },
    },
  },
  plugins: [],
});
