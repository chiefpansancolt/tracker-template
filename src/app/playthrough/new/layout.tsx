import type { Metadata } from "next";

// CHANGE_ME: Update title/description for your app
export const metadata: Metadata = {
	title: "New Playthrough",
	description: "Start tracking a new YOUR_APP_NAME playthrough.",
	alternates: {
		canonical: "/playthrough/new",
	},
	openGraph: {
		title: "New Playthrough | YOUR_APP_NAME",
		description: "Start tracking a new YOUR_APP_NAME playthrough.",
		url: "/playthrough/new",
	},
};

const PlaythroughNewLayout = ({ children }: { children: React.ReactNode }) => children;

export default PlaythroughNewLayout;
