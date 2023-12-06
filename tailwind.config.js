/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg-color": "#F8EDED",
        "secondary-bg-color": "#F2D0D2",
        "main-text-color": "#393838",
        "text-color": "#656464",
        "first-section-color": "F3F3F3",
        "dark-pink": "#d9a1a4",
        "hover-pink": "#e5bcbc"
      }
    },
  },
  plugins: [],
}

