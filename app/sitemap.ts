import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.queenancapital.com/',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.queenancapital.com/company',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.queenancapital.com/companies',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.queenancapital.com/operating-notes',
      changeFrequency: 'monthly',
      priority: 0.72,
    },
  ];
}
