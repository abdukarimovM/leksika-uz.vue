// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      modules: ["@nuxtjs/tailwindcss", ],
      app: {
        head: {
          title: "FakeStore",
          link: [
            {
              rel: "preconnect",
              href: "https://fonts.googleapis.com",
            },
            {
              rel: "stylesheet",
              href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
            },
          ],

        },
      },
})
