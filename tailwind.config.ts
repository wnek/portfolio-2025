import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
  content:{
    files:["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
    extract},
   
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
    fontSize,
    screens,
  },
  plugins: [fluid],
} satisfies Config;
