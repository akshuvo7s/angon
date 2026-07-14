import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        amber: {
          50: "#fffbeb",
          700: "#b45309",
          800: "#92400e",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
