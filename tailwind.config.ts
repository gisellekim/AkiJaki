import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#135C00",
      secondary: "#8BC57C",
      accent: "#EDA345",
      grey: "rgba(0,0,0,.5)",
      white: "white",
      black: "black",
    },
    fontFamily: {
      sans: ["Roboto"],
    },
  },
}
export default config
