/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: "#f1f5f9",
        canvas: "#ffffff",
        accent: "#2563eb",
        border: "#e2e8f0",
        text: {
          primary: "#0f172a",
          secondary: "#64748b",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        premium: "0 4px 20px -1px rgba(15, 23, 42, 0.03), 0 2px 10px -1px rgba(15, 23, 42, 0.02)",
      },
    },
  },
  plugins: [],
}
