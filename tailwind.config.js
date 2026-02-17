/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                rubid: {
                    black: '#01001E', // Dark background
                    white: '#E8E8E8', // Light text/bg
                    red: '#DE3021',   // Accent
                }
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #01001E 0deg, #1a1a40 180deg, #01001E 360deg)',
            }
        },
    },
    plugins: [],
}
