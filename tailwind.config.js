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
        "tosca-lightest": "#ECF5F5",
        "tosca-light": "#E4F6F6",
        "tosca-dark": "#359898",
        "tosca-darker": "#609497",
        "tosca-darkest": "#6EB6BA",
        "tosca-darkest-1": "#66AFB4",
      },
      boxShadow: {
        card: "0px 0px 20px rgba(14, 71, 74, 0.1);",
        product: "0px 0px 10px rgba(0, 0, 0, 0.1);",
      },
    },
  },
  plugins: [],
};
