import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      card: '#F3F3F3',
      current: 'currentColor',
      blue: "#50C878",
      blue: '#0A66C2',
      red: colors.red,
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        robot: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
