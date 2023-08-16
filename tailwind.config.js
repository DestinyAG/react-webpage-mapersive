/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-1": "#667085",
        "color-2" : "rgba(0, 0, 0, 1)",
        "color-3": "rgba(0, 0, 0, 0.0625)",
        "color-4": "rgba(234, 234, 234, 1)",
        "blue-1": "#021E35",
        "blue-2": "#1A89EC",
        "blue-4": "rgba(2, 30, 53, 1)",
        "gray-1" : "#E3E6E9",
        "gray-2": "#EAEAEA",
        "gray-3": "#F2F4F7",
        "gray-4": "#344054",
        "whiteblue-1": "rgba(26, 137, 236, 0.07)",
       
      },
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"]
      },
      screens: {
        xs: "480px",
        sm: "768px",
        m: "1060px"
      }, 
      content: {
        rectangle: "url('./assets/rectangle.png')"
      }
    },
  },
  plugins: [],
};
