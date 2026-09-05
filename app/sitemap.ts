import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cliner.app";
  // Use a stable lastModified to avoid cache busting on every build
  const lastModified = new Date("2026-01-15T00:00:00.000Z");

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
      images: ["https://cliner.app/opengraph-image.png", "https://cliner.app/app-icon.png"],
    },
  ];
}
