import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "bounce-slow": "bounce-slow 1s infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "regal-blue": "#243c5a",
        "kubio-color-5": "#f0f4ff",
        "papaya-orange": "#fcb828",
      },
      spacing: {
        "100vh-minus-header": "calc(100vh - 82px)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
} satisfies Config;
