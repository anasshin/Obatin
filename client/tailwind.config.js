import { addDynamicIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,svg}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [daisyui, addDynamicIconSelectors()],
  themes: [
    {
      myTheme: {
        primary: "#fff",
      },
    },
  ],
};
