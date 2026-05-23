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
        bg: "#08070a",
        surface: "#11100f",
        raised: "#1a1815",
        ink: {
          DEFAULT: "#F4F1EA",
          2: "#A89F8F",
          3: "#6F665B",
          dim: "#3a342d",
        },
        cream: {
          DEFAULT: "#F4F1EA",
          warm: "#EFE8DA",
        },
        accent: {
          DEFAULT: "#C8334B",
          deep: "#8E2436",
          ember: "#5C1A24",
        },
        hairline: "rgba(244,241,234,0.08)",
        hair2: "rgba(244,241,234,0.16)",
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "Inter",
          "ui-sans-serif",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        sans: [
          "var(--font-display)",
          "Inter",
          "ui-sans-serif",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "Geist Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      letterSpacing: {
        display: "-0.045em",
        widewide: "0.10em",
        widerwide: "0.22em",
      },
      maxWidth: {
        page: "1200px",
        prose: "42rem",
      },
      borderRadius: {
        DEFAULT: "0",
      },
    },
  },
  plugins: [],
};

export default config;
