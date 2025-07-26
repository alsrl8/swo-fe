/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // You can define custom colors here if needed
      }
    }
  },
	safelist: [
		{
			pattern: /dark/,
			variants: ['dark'],
		},
	],
  plugins: []
}