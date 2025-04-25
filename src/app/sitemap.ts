import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const host = process.env.HOST || 'http://localhost:3000/';
  const lastModified = new Date().toISOString();

  return [
    {
      url: host,
      lastModified,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${host}/en`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];
}
