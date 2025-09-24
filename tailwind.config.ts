// tailwind.config.ts
import type { Config } from "tailwindcss";

const config = {
  // ... other config
  theme: {
    container: {
      // ...
    },
    extend: {
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 4s infinite ease-in-out",
      },
    },
  },
  // ...
} satisfies Config;

export default config;