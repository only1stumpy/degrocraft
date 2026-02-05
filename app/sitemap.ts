import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://degrocraft.ru";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/rules`,
      lastModified: new Date('2026-01-30'),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
