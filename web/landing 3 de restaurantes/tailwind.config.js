/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                playfair: ['"Playfair Display"', 'serif'],
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#d4af37',
                    hover: '#b8962f',
                },
                dark: {
                    bg: '#0a0a0a',
                    card: '#141414',
                }
            }
        },
    },
    plugins: [],
}
