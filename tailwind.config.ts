import type { Config } from "tailwindcss";

/**
 * Design tokens mirror venode.ai's CSS custom properties. Refer to
 * app/globals.css for the source-of-truth mapping.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAF9F5",
        surface: "#F1EDE2",
        ink: {
          DEFAULT: "#141412",
          2: "#5A5854",
          warm: "#1A1816",
        },
        cream: {
          DEFAULT: "#FAF9F5",
          warm: "#F4F1EA",
        },
        accent: {
          DEFAULT: "#8E2436",
          deep: "#5C1A24",
          lift: "#C8334B",
        },
        hairline: "rgba(20,20,18,0.10)",
        hair2: "rgba(20,20,18,0.18)",
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
        serif: [
          "var(--font-serif)",
          "Lora",
          "Georgia",
          "Cambria",
          "serif",
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
        display: "-0.04em",
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
