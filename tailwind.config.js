/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      {
        modernWebDev: {
          primary: "#1D4ED8",
          secondary: "#3B82F6",
          neutral: "#F9FAFB",
          "base-100": "#FFFFFF",
          "text-color": "#111827",
          "text-primary": "#1D4ED8",
        },
      },
    ],
  },
};
