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
				display1: ["48px", "auto"],
				display2: ["40px", "auto"],
				heading1: ["36px", "auto"],
				heading2: ["32px", "auto"],
				heading3: ["24px", "auto"],
				paragraph1: ["16px", "auto"],
				paragraph2: ["14px", "auto"],
				caption: ["12px", "auto"],
			},
			boxShadow: {
				default: "8px 8px 1.5px 0px rgba(0, 0, 0, 0.15)",
				hover: "6px 6px 1px 0px rgba(0, 0, 0, 0.15)",
				active: "3px 3px .5px 0px rgba(0, 0, 0, 0.15)",
			},
		},
	},
	plugins: [],
};
