/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            colors: {
                primary: '#FF5193',
                secondary: '#0095F1',
                dark: '#212544',
                light: '#e1e0f1',
                white: '#fff',
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                serif: ['DM Sans', 'serif'],
                body: ['DM Sans', 'serif'],
            },
        },
    },
    plugins: [],
};
