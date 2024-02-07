/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "rgba(255, 149, 0, 1)",
        "secondary": "rgba(38, 38, 38, 1)",
        "tertiary": "rgba(255, 234, 204, 1)",
        "gray": "rgba(241, 241, 243, 1)",
        "whiting": "rgba(247, 247, 248, 1)",
        "orange": "rgba(255, 234, 204, 1)",
        "absolute": "rgba(255, 255, 255, 1)",
      }
    },
  },
  plugins: [],
}

