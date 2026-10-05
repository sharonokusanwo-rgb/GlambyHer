import react from "@vitejs/plugin-react"; // Imported as lowercase 'react'
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react, // Fix: Remove the parentheses () since 'react' is the default export object, not a factory function
    babel({
      // Ensure reactCompilerPreset is properly referenced if needed,
      // or use standard babel presets
    }),
    tailwindcss(),
  ],
});
