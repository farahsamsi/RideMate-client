import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
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
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
    // base: true,
    // styled: true,
    // utils: true,
    // logs: true,
    // prefix: "",
    // rtl: false,
    classBasedThemes: true,
  },
};
