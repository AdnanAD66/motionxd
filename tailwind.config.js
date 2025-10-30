module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,css}'], // Ensure all relevant files are scanned
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "Space Grotesk Placeholder", "sans-serif"], // Ensure the font is included
      },
      colors: {
        primary: '#1e40af',    // Now "text-primary" will work
        // If you want shades, add those separately:
        'primary-light': '#60a5fa',
        'primary-dark': '#1e3a8a',
      },
    },
  },
  plugins: [],
};
