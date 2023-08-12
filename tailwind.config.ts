import type { Config } from "tailwindcss";

const config: Config = {
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
    },
  },
  plugins: [],
};
export default config;
