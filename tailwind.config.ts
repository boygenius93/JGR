import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#15161A",
          soft: "#33353C",
        },
        ivory: {
          DEFAULT: "#FAF8F3",
          alt: "#F2EFE7",
        },
        stone: {
          50: "#F7F6F3",
          100: "#EDEBE4",
          200: "#DCD9D0",
          300: "#C1BDB0",
          400: "#9C978A",
          500: "#79766D",
          600: "#5C594F",
          700: "#454339",
        },
        accent: {
          DEFAULT: "#4536D9",
          soft: "#EDEBFC",
          dim: "#332AA3",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(21,22,26,0.04), 0 8px 24px -8px rgba(21,22,26,0.08)",
        raised: "0 2px 4px rgba(21,22,26,0.06), 0 16px 40px -12px rgba(21,22,26,0.14)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
