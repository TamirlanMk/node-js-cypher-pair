/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/*.{html,js}",
        "./src/pages/*.{html,js}",
    ],
    theme: {
        fontFamily: {
            'primary': ['"Inter"', 'sans-serif'],
            'secondary': ['"Yandex Sans Text"', 'sans-serif'],
            'content': ['"TasmanMind"', 'sans-serif']
        },
        container: {
            // you can configure the container to be centered
            center: true,
            // or have default horizontal padding
            padding: '20px',
            // default breakpoints but with 40px removed
            screens: {
                sm: '600px',
                md: '728px',
                lg: '984px',
                xl: '1240px',
            },
        },
        extend: {},
    },
    plugins: [],
}

