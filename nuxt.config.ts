import process from "node:process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxtjs/seo", "nuxt-security"],
  // Nuxt SPA Loading Template (https://nuxt.com/docs/api/nuxt-config#spaloadingtemplate)
  spaLoadingTemplate: true,
  // Nuxt SSR Configuration (https://nuxt.com/docs/api/nuxt-config#ssr)
  ssr: false,
  // Nuxt TypeScript Configuration (https://nuxt.com/docs/guide/concepts/typescript)
  typescript: {
    strict: true,
    typeCheck: false,
    tsConfig: {
      // exclude: ["./github/workflows"],
    },
  },
  css: [
    "~/assets/css/app.css",
  ],
  // Nuxt App Configuration (https://nuxt.com/docs/api/nuxt-config#app-1)
  app: {
    head: {
      titleTemplate: "%s %separator %siteName",
      // link: [
      //   { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // ],
      htmlAttrs: {
        lang: "id",
      },
    },
  },
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
  ],
  // Nuxt Runtime Config (https://nuxt.com/docs/guide/going-further/runtime-config)
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  // Nuxt Site Configuration (https://nuxtseo.com/docs/site-config/getting-started/introduction)
  site: {
    // enabled: false,
    // * DEFAULT: siteConfig.env === 'production' || process.env.NODE_ENV === 'production'
    // indexable: process.env.NUXT_SITE_ENV === "production",
    // * DEFAULT: siteName.env || process.env.NUXT_SITE_NAME
    // name: process.env.NUXT_SITE_NAME,
    defaultLocale: "id",
  },
  // Nuxt Robots Configuration (https://nuxtseo.com/docs/robots/getting-started/introduction)
  robots: {
    // enabled: false,
    // blockAiBots: true,
    // blockNonSeoBots: true,
    // credits: true,
    sitemap: `${process.env.NUXT_SITE_URL}/sitemap.xml`,
    disallow: [
      "/partials/", // Block all that includes "partials"
      "*/partials/", // Block all that includes "partials"
    ],
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
    // enabled: false,
    exclude: [
      // all routes that include "partials"
      /partials/,
    ],
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
  // Nuxt SEO Utils Configuration (https://nuxtseo.com/docs/seo-utils/guides/nuxt-config-seo-meta)
  seo: {
    // enabled: false
    fallbackTitle: true,
    meta: {
      xUaCompatible: "IE=edge",
      viewport: "width=device-width, initial-scale=1",
      title: "Nuxt3 Basic Starter",
      description: "Nuxt3 Basic Starter",

      creator: "Ersan Karimi",
      author: "Ersan Karimi",
      publisher: "Ersan Karimi",
      applicationName: process.env.NUXT_SITE_NAME,

      // Nuxt SEO Utils already sets the below tags for you
      ogLocale: "id_ID",
      ogType: "website",
      // ...
    },
  },
  // Nuxt Security Configuration (https://nuxt-security.vercel.app/getting-started/configuration)
  security: {
    strict: true,
    sri: false,
    // corsHandler: {
    //   origin: process.env.NUXT_PUBLIC_SITE_URL,
    //   methods: ["GET", "POST"],
    // },
    headers: {
      crossOriginResourcePolicy: "same-origin",
      crossOriginOpenerPolicy: "same-origin",
      crossOriginEmbedderPolicy: "credentialless",
      contentSecurityPolicy: {
        "upgrade-insecure-requests": true,
        "img-src": ["'self'", "data:", "https://res.cloudinary.com", "https://placehold.co"],
        "connect-src": ["'self'", "https://api.iconify.design", process.env.NUXT_PUBLIC_API_URL?.toString()?.replace("/your/api", "") || ""], // Allow external API,
        "script-src": ["'self'", "'https'", "'unsafe-inline'", "'unsafe-eval'", "'strict-dynamic'", "'nonce-{{nonce}}'"],
        "style-src": ["'self'", "'https'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      },
    },
  },
});
