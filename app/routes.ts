import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/root.tsx", [
        index("routes/home.tsx"),
        route("/about", "routes/about.tsx"),
        route("/gallary", "routes/gallary.tsx"),
        route("artist/:id", "./routes/artist-detail.tsx"),
        route("news/:slug", "./routes/news-detail.tsx"),    ])
] satisfies RouteConfig;
