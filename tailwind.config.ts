// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(240, 5%, 84%)", // ⚠️ puedes personalizarlo
      },
    },
  },
  plugins: [],
};
export default config;
