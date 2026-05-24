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
        "bg-2": "#0d0d10",
        surface: "#14141a",
        ink: {
          DEFAULT: "#F2EFE7",
          2: "#9C968B",
          3: "#5d574e",
          4: "#38332d",
        },
        accent: {
          DEFAULT: "#B33347",
          quiet: "#6E2330",
        },
        hairline: "rgba(242,239,231,0.08)",
        hair2: "rgba(242,239,231,0.14)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Geist Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        display: "-0.025em",
        wordmark: "-0.045em",
        widewide: "0.18em",
      },
      maxWidth: {
        page: "1280px",
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
