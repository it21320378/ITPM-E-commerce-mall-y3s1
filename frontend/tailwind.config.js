/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color1" : "#0766AD",
        "color2" : "#29ADB2",
        "color3" : "#C5E898",
        "backgroundclour" : "#F3F3F3",
        "fontcolor" : "#000000" 
      },
    },
  },
  plugins: [],
}

