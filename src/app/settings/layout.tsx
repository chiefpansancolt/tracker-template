import type { Metadata } from "next";

// CHANGE_ME: Update title/description for your app.
// Settings is noindex by default since it's a personal-preferences page,
// not content worth showing in search results.
export const metadata: Metadata = {
	title: "Settings",
	description: "Manage your YOUR_APP_NAME preferences and data.",
	alternates: {
		canonical: "/settings",
	},
	robots: {
		index: false,
		follow: true,
	},
};

const SettingsLayout = ({ children }: { children: React.ReactNode }) => children;

export default SettingsLayout;
