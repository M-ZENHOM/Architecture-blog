/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1345px" },
        lg: { max: "1023px" },
        md: { max: "991px" },
        sm: { max: "639px" },
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill,minmax(580px,1fr))",
      },
    },
  },
  plugins: [],
};
