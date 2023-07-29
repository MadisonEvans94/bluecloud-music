/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#2C6EB8",
				secondary: "#7BA8DC",
				secondaryLight: "#A4C5EB",
				accent: "#C9E1FD",
				error: "#DC7B7B",
				info: "#FCFCFC",
			},
			fontSize: {
				headingDesktop: ["64px", "auto"],
				headingTablet: ["56px", "auto"],
				headingMobile: ["48px", "auto"],
				paragraph1: ["16px", "auto"],
				paragraph2: ["14px", "auto"],
				caption: ["12px", "auto"],
			},
			dropShadow: {
				default: "8px 8px 1.5px rgba(0, 0, 0, 0.25)",
				hover: "6px 6px 1px rgba(0, 0, 0, 0.35)",
				active: "1px 2px .5px rgba(0, 0, 0, 0.50)",
			},
			// [8px_8px_1.5px_rgba(0,0,0,0.35)]
			boxShadow: {
				default: "8px 8px 1.5px 0px rgba(0, 0, 0, 0.15)",
				hover: "6px 6px 1px 0px rgba(0, 0, 0, 0.15)",
				active: "3px 3px .5px 0px rgba(0, 0, 0, 0.15)",
			},
		},
	},
	plugins: [],
};
