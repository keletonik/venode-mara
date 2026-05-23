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
        /* Warm-cream paper */
        paper: {
          DEFAULT: "#faf8f3",
          alt: "#f3f0e7",
          deep: "#ebe7da",
        },
        /* Ink — text & marks */
        ink: {
          DEFAULT: "#1a1a18",
          900: "#0c0c0b",
          800: "#1a1a18",
          700: "#2a2a26",
          600: "#3d3d38",
          500: "#56564f",
          400: "#76756d",
          300: "#9a9890",
        },
        rule: "#e3dfd0",
        /* Accent kept only for state colors, never used for chrome */
        signal: {
          good: "#3a6b3a",
          warn: "#a06a1f",
          bad: "#a23a2c",
        },
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
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.035em",
        wider2: "0.18em",
      },
      maxWidth: {
        prose: "38rem",
        page: "62rem",
        wide: "76rem",
      },
      borderRadius: {
        DEFAULT: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
