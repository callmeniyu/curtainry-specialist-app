/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // if using pages dir
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // main brand color
          light: "#60A5FA",   // optional hover/light variant
          dark: "#1E40AF",    // optional darker variant
        },
        "primary-dark": "#1E40AF", // alias for primary.dark
        "primary-shade": "#E5E7EB", // soft gray shade
        background: "#FFFFFF",
        text: {
          DEFAULT: "#212121", // main black text
          muted: "#6B7280",   // gray text for descriptions
        },
        border: {
          DEFAULT: "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
}
