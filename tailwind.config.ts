import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans": ["var(--font-nunito-sans)"],
      },
      colors: {
        "REST-dark-blue": "#2b3945",
        "REST-very-dark-blue": "#202c37",
        "REST-very-dark-blue-text": "#111517",
        "REST-dark-gray": "#858585",
        "REST-very-light-gray": "#fafafa",
      },
      boxShadow: {
        "REST-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        "REST-input-shadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      },
    },
  },
  plugins: [],
};
export default config;
