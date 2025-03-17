import process from "node:process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/seo",
  ],
  // Nuxt Components Custom Directories (https://nuxt.com/docs/guide/directory-structure/components#custom-directories)
  components: [
    {
      path: "~/components",
      prefix: "App",
    },
    // {
    //   path: "~/components/common",
    //   prefix: "Common",
    // },
    // {
    //   path: "~/components/partials",
    //   prefix: "Part",
    // },
  ],
  // Nuxt Runtime Config (https://nuxt.com/docs/guide/going-further/runtime-config)
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  // Nuxt Site Configuration (https://nuxtseo.com/docs/site-config/getting-started/introduction)
  site: {
    indexable: process.env.NUXT_SITE_ENV === "production",
  },
  // Nuxt Robots Configuration (https://nuxtseo.com/docs/robots/getting-started/introduction)
  robots: {
    // blockAiBots: true,
    // blockNonSeoBots: true,
    // credits: true,
  },
  // Nuxt OG Image Configuration (https://nuxtseo.com/docs/og-image/getting-started/introduction)
  ogImage: {
    enabled: false,
  },
  // Nuxt Sitemap Configuration (https://nuxtseo.com/docs/link-checker/getting-started/introduction)
  linkChecker: {
    enabled: false,
  },
  // Nuxt Sitemap Configuration (https://nuxtseo.com/docs/sitemap/getting-started/installation)
  sitemap: {
    enabled: false,
  },
  // Nuxt Schema.org Configuration (https://nuxtseo.com/docs/schema-org/getting-started/introduction)
  schemaOrg: {
    enabled: false,
  },
  // Nuxt Icon Configuration (https://github.com/nuxt/icon?tab=readme-ov-file)
  icon: {
    collections: [
      "heroicons",
    ],
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
      icons: [
        "heroicons",
      ],
      // includeCustomCollections: true,
    },
    // customCollections: [
    //   {
    //     dir: "./assets/icons",
    //     prefix: "custom",
    //   },
    // ],
  },
  // Nuxt Font Configuration (https://fonts.nuxt.com)
  fonts: {
    defaults: {
      subsets: ["latin"],
      weights: [400, 700],
    },
    families: [
      {
        name: "Inter",
        display: "swap",
        provider: "google",
      },
    ],
  },
  // Nuxt Prerendering Configuration (https://nuxt.com/docs/getting-started/prerendering)
  nitro: {
    prerender: {
      routes: [
        "/",
        // Nuxt Image Configuration for Static Images (https://image.nuxt.com/advanced/static-images)
        // "/_ipx/_/example.png",
      ],
    },
  },
});
