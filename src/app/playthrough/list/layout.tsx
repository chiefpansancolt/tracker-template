import type { Metadata } from "next";

// CHANGE_ME: Update title/description for your app
export const metadata: Metadata = {
	title: "Playthroughs",
	description: "View and manage all of your YOUR_APP_NAME playthroughs.",
	alternates: {
		canonical: "/playthrough/list",
	},
	openGraph: {
		title: "Playthroughs | YOUR_APP_NAME",
		description: "View and manage all of your YOUR_APP_NAME playthroughs.",
		url: "/playthrough/list",
	},
};

const PlaythroughListLayout = ({ children }: { children: React.ReactNode }) => children;

export default PlaythroughListLayout;
