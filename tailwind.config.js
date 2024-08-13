/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],


  // prefix: 'tw-',

  theme: {
    extend: {
      colors: {
        "main-bg-color": "#F8EDED",
        "secondary-bg-color": "#F2D0D2",
        "secondary2-bg-color": "#E9ECE5",
        "main-text-color": "#393838",
        "text-color": "#656464",
        "bg-light-green": "#E9ECE5",
        "first-section-color": "#F3F3F3",
        "dark-pink": "#d9a1a4",
        "hover-pink": "#e5bcbc",
        "buttonColor": '#F28482',
      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'ping-once': 'ping 1s cubic-bezier(0, 0, 0.2, 1) 1'
      }
    },
  },

}


