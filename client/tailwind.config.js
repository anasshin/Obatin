// import { addDynamicIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,svg}"],

  variants: {},
  plugins: [daisyui],
  daisyui: {
    // styled: true,
    themes: ["emerald"],
  },
};
