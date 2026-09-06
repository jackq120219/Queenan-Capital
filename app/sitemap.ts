import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://queenancapital.com/',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://queenancapital.com/company',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
