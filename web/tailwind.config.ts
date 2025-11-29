import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#18324A",
          blue: "#4A90E2",
          light: "#FAFAFA",
        },
      },
      fontFamily: {
        heading: ["Albert Sans", "ui-sans-serif", "system-ui"],
        body: ["Lato", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
