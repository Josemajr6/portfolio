import { MetadataRoute } from 'next';

const BASE_URL = 'https://josemajr6.me';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Si tuvieras rutas privadas
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}