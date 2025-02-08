// filepath: /Users/yasaman/Desktop/myProject/advanced-code-challenge-react/tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: "#001327",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
