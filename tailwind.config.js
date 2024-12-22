import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: "Outfit",
        audioWide: "Audiowide",
      },
      colors: {
        primary: "#F5B754",
      },
    },
  },
  plugins: [daisyui],
};
