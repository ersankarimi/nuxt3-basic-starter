import type { RouterConfig } from "nuxt/schema";

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: (_routes) => {
    // if (process.env.NUXT_SITE_ENV === "production") {
    _routes = _routes.filter(route => !route.path.includes("partials"));

    return _routes;
    // }
  },
};
