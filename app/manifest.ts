import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cliner for Mac",
    short_name: "Cliner",
    description: "Uninstall Mac apps completely. Not halfway. Reclaim gigabytes of hidden junk.",
    start_url: "/",
    display: "standalone",
    background_color: "#060608",
    theme_color: "#060608",
    icons: [
      {
        src: "/icons/128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/icons/128x128@2x.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icons/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/app-icon.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
