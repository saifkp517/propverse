import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';
import { nextui } from "@nextui-org/react";
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    'node_modules/preline/dist/*.js',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	colors: {
  		transparent: 'transparent',
  		card: '#F3F3F3',
  		current: 'currentColor',
  		blueTheme: '#0A66C2',
  		blue: 'colors.blue',
  		indigo: 'colors.indigo',
  		green: 'colors.green',
  		red: 'colors.red',
  		orange: 'colors.orange',
  		purple: 'colors.purple',
  		white: 'colors.white',
  		black: 'colors.black',
  		gray: 'colors.gray',
  		background: '#00FFFF'
  	},
	animation: {
		'animate-ping': 'ping 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
	},
	keyframes: {
		ping: {
		  "0%, 100%": {
			opacity: "1",
		  },
		  "50%": {
			opacity: ".5",
		  },
		},
	  },
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		fontFamily: {
  			roboto: ['Roboto', 'sans-serif'],
  		},
  		height: {
  			'112': '28rem',
  			'128': '32rem',
  			'144': '36rem',
  			'160': '40rem',
  			'176': '44rem',
  			'192': '48rem',
  			'208': '52rem',
  			'224': '56rem',
  			'240': '60rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },darkMode: ["class", "class"],
  plugins: [
    nextui({
	  addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#0A66C2',
              foreground: '#FFFFFF',
            }
          }
        }
      }
    }),
    require('preline/plugin'),
      require("tailwindcss-animate")
],
};
export default config;
