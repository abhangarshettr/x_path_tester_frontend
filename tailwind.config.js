/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      {
        mytheme: {
          primary: "#0284c7",

          secondary: "#10b981",

          accent: "#368180",

          neutral: "#0e7490",

          "base-100": "#f3f4f6",

          info: "#0CA6E9",

          success: "#52c41a",

          warning: "#faad14",

          error: "#ef4444",
        },
      },
    ],
  },
}
