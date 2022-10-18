/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#E34F4F",
        "grey-light": "#EAEAEA",
        grey: "#A0A0A0",
        "grey-dark": "#333333",
        tosca: "#B1D9DB",
        "tosca-button": "#7CD2D7",
        "tosca-light": "#E4F6F6",
        "tosca-dark": "#359898",
        "tosca-darker": "#609497",
      },
    },
  },
  plugins: [],
};
