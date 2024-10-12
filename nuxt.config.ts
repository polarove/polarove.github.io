// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: [
    "assets/css/normalize.css",
    "assets/css/scrollbar.css",
    "assets/css/var.css",
  ],
  modules: ["@nuxt/icon", "@unocss/nuxt", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
    classPrefix: "",
    fallback: "system",
    preference: "system",
  },
  // usage: https://unocss.dev/integrations/nuxt#configuration
  // unocss: {
  // 	nuxtLayers: true
  // }
});
