const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme("colors"),
			primary: colors.indigo[500],
			primaryHover: colors.indigo[700],
			secondary: "#ffed4a",
			buttonRed: "#F82B60",
			danger: colors.red[500],
			success: colors.green[500],
			darkYellow: "#ffdb58",
		}),
		extend: {
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {
			opacity: ["disabled"],
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				".filter-none": {
					filter: "none",
				},
				".filter-grayscale": {
					filter: "grayscale(100%)",
				},
			};
			addUtilities(newUtilities, ["responsive", "hover"]);
		}),
	],
};
