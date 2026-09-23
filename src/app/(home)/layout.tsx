import type { Metadata } from "next";

// CHANGE_ME: This file demonstrates the per-page metadata pattern.
// Every route needs a sibling layout.tsx like this one because page.tsx
// files in this template are client components ("use client") and can't
// export `metadata` directly — metadata must live in a server component.
export const metadata: Metadata = {
	alternates: {
		canonical: "/",
	},
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => children;

export default HomeLayout;
