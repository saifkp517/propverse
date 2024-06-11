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
      orange: colors.orange,
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
        roboto: ['Roboto', 'sans-serif'],
      },
      height: {
        '112': '28rem', // Custom height of 28rem
        '128': '32rem', // Custom height of 32rem
        '144': '36rem', // Custom height of 36rem
        '160': '40rem', // Custom height of 40rem
        '176': '44rem', // Custom height of 44rem
        '192': '48rem', // Custom height of 48rem
        '208': '52rem', // Custom height of 52rem
        '224': '56rem', // Custom height of 56rem
        '240': '60rem', // Custom height of 60rem
        // Add more custom values as needed
      },
    },
  },
  plugins: [
  ],
};
export default config;
