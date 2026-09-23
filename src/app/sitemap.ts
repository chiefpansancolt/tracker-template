import type { MetadataRoute } from "next";

// CHANGE_ME: Must match siteUrl in src/app/layout.tsx and SITE_URL in src/app/robots.ts
const SITE_URL = "https://YOUR_APP_NAME.example.com";

// CHANGE_ME: Add an entry here for every indexable route you add to the app.
// Leave out routes that are user-specific or disallowed in robots.ts (e.g. /settings).
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: SITE_URL, changeFrequency: "monthly", priority: 1 },
		{ url: `${SITE_URL}/playthrough/list`, changeFrequency: "monthly", priority: 0.5 },
		{ url: `${SITE_URL}/playthrough/new`, changeFrequency: "monthly", priority: 0.5 },
	];
}
