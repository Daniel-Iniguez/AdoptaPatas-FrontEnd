/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        "main-bg-color": "#F8EDED",
        "secondary-bg-color": "#F2D0D2",
        "main-text-color": "#393838",
        "text-color": "#656464",
        "section-bg-color": "#F3F3F3",
      }
    },
  },
  plugins: [],
}

