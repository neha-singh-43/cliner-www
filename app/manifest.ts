import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Cliner for Mac",
    short_name: "Cliner",
    description: "Uninstall Mac apps completely. Not halfway. Reclaim gigabytes of hidden junk in one click. $3 lifetime.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["window-controls-overlay", "standalone", "browser"],
    orientation: "portrait-primary",
    background_color: "#060608",
    theme_color: "#060608",
    categories: ["utilities", "productivity"],
    lang: "en-US",
    dir: "ltr",
    prefer_related_applications: false,
    icons: [
      {
        src: "/icons/32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icons/128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/icons/128x128@2x.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/app-icon.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Get Cliner — $3 Lifetime",
        short_name: "Buy",
        description: "Purchase Cliner lifetime license",
        url: "https://dodo.pe/cliner",
        icons: [{ src: "/icons/128x128.png", sizes: "128x128" }],
      },
    ],
    screenshots: [
      {
        src: "/opengraph-image.png",
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
        label: "Cliner homepage with interactive demo",
      },
    ],
  };
}
