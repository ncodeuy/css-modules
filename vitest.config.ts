import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    css: {
      modules: {
        classNameStrategy: "non-scoped",
      },
    },
    include: ["./src/**/*.test.{ts,tsx}"],
  },
});
