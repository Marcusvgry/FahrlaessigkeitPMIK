import { defineConfig } from "vite";

export default defineConfig({
  base: "/FahrlaessigkeitPMIK/",
  build: {
    sourcemap: true,
  },
  server: {
    port: 5173,
  },
});
