import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
 return [
  {url:'https://www.queenancapital.com/',changeFrequency:'monthly',priority:1},
  {url:'https://www.queenancapital.com/company',changeFrequency:'monthly',priority:.8},
  {url:'https://www.queenancapital.com/companies',changeFrequency:'monthly',priority:.9},
  {url:'https://www.queenancapital.com/letters/building-for-the-long-term',changeFrequency:'yearly',priority:.85},
  {url:'https://www.queenancapital.com/research-standards',changeFrequency:'monthly',priority:.5},
  {url:'https://www.queenancapital.com/operating-notes',changeFrequency:'monthly',priority:.6},
 ];
}
