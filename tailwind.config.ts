import type {Config} from 'tailwindcss';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			padding: {
				DEFAULT: '1.5rem', // px-6
			},
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				black: 'var(--foreground)',
			},
		},
	},
	plugins: [],
} satisfies Config;
