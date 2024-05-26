import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      card: '#F3F3F3',
      current: 'currentColor',
      blueTheme: '#0A66C2',
      blue: colors.blue,
      indigo: colors.indigo,
      green: colors.green,
      red: colors.red,
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      background: '#00FFFF'
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
  plugins: [
  ],
};
export default config;
