/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: '12px',
				md: '8px',
				sm: '4px'
			},
			colors: {
				primary: {
					DEFAULT: '#90b4ce',
					dark: '#094067',
					light: '#3da9fc'
				},
				secondary: {
					DEFAULT: '#ef4565',
					dark: '#a8002f'
				},
				light: '#fffffe',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}