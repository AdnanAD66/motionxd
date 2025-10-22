module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,css}'], // Ensure all relevant files are scanned
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "Space Grotesk Placeholder", "sans-serif"], // Ensure the font is included
      },
    },
  },
  plugins: [],
};
