import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#194BAF",
      secondary: "#DCE4F3",
      tertiary: "#F3F6FB",
      orange: "#E18700",
      blue: "#00AFFA",
      red: "#FA3232",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      fontSize: {
        "4.5xl": ["40px", "60px"],
      },
      backgroundImage: {
        "gradient-115deg": "linear-gradient(115deg, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
