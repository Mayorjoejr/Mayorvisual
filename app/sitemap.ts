import type { MetadataRoute } from 'next';
import { projects, seo } from '@/data/content';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{const url=seo.siteUrl;return [{url,changeFrequency:'monthly',priority:1},...projects.map(p=>({url:`${url}/projects/${p.slug}/`,changeFrequency:'monthly' as const,priority:0.8}))];}
