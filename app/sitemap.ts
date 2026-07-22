import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://degaanjam.studio",
      lastModified: new Date(),
    },
  ];
}