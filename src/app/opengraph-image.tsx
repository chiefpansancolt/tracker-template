import { ImageResponse } from "next/og";

// CHANGE_ME: Update alt text, colors, and title/subtitle to match your app.
// This file is a Next.js convention — it's automatically picked up as the
// OG/Twitter share image for every route that doesn't define its own
// opengraph-image.tsx. No external image asset needed.
export const alt = "YOUR_APP_NAME";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const Image = () =>
	new ImageResponse(
		(
			<div
				style={{
					background: "linear-gradient(135deg, #5a9367 0%, #6daedc 50%, #8b572a 100%)",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					fontFamily: "sans-serif",
				}}
			>
				<div
					style={{
						color: "white",
						fontSize: 80,
						fontWeight: 800,
						letterSpacing: "-2px",
						textShadow: "0 2px 12px rgba(0,0,0,0.3)",
						lineHeight: 1,
						marginBottom: 20,
					}}
				>
					YOUR_APP_NAME
				</div>
				<div
					style={{
						color: "rgba(255,255,255,0.85)",
						fontSize: 34,
						fontWeight: 400,
						letterSpacing: "0.5px",
					}}
				>
					A progress tracker built with tracker-template
				</div>
			</div>
		),
		{ ...size }
	);

export default Image;
