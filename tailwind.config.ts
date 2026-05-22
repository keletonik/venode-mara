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
          950: "#05070a",
          900: "#090c11",
          850: "#0c1015",
          800: "#11161d",
          700: "#1b2129",
          600: "#262d37",
        },
        accent: {
          DEFAULT: "#bef264",
          soft: "#d9f99d",
          deep: "#84cc16",
        },
        signal: {
          good: "#bef264",
          warn: "#f5b544",
          bad: "#fb7185",
        },
        cream: "#e8ebef",
        ash: "#7a828c",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "ui-serif",
          "Georgia",
          "Cambria",
          "serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widewide: "0.22em",
      },
      maxWidth: {
        content: "76rem",
      },
      borderRadius: {
        DEFAULT: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
