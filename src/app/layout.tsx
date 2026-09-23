import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PlaythroughProvider } from "@/lib/contexts/PlaythroughContext";
import { UIProvider } from "@/lib/contexts/UIContext";
import { LayoutWrapper } from "@/comps/layout/LayoutWrapper";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// CHANGE_ME: Update siteUrl to your production domain (must match src/app/robots.ts and src/app/sitemap.ts)
const siteUrl = "https://YOUR_APP_NAME.example.com";

// CHANGE_ME: Update title, description, and keywords for your app
export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "YOUR_APP_NAME",
		template: "%s | YOUR_APP_NAME",
	},
	description: "A progress tracker built with tracker-template",
	keywords: ["YOUR_GAME_NAME", "progress tracker", "game companion"],
	alternates: {
		canonical: "/",
	},
	robots: {
		index: true,
		follow: true,
	},
	// CHANGE_ME: Add favicon/apple-touch-icon files to public/ and uncomment
	// icons: {
	// 	icon: [
	// 		{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
	// 		{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
	// 	],
	// 	apple: "/apple-touch-icon.png",
	// },
	// manifest: "/site.webmanifest",
	openGraph: {
		type: "website",
		siteName: "YOUR_APP_NAME",
		title: "YOUR_APP_NAME",
		description: "A progress tracker built with tracker-template",
		url: siteUrl,
	},
	twitter: {
		card: "summary_large_image",
		title: "YOUR_APP_NAME",
		description: "A progress tracker built with tracker-template",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className="h-full">
			<head>
				<ThemeModeScript />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-50 antialiased dark:bg-gray-900`}
			>
				<UIProvider>
					<PlaythroughProvider>
						<LayoutWrapper>{children}</LayoutWrapper>
					</PlaythroughProvider>
				</UIProvider>
			</body>
		</html>
	);
}
