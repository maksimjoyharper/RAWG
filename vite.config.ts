import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import { defineConfig, loadEnv } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default ({ mode }) => {
//   process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

//   return defineConfig({
//     base: process.env.BASE_URL || "/",
//     plugins: [react()],
//   });
// };
