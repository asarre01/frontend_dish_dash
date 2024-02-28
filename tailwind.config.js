/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                xs: "321px",
            },
            colors: {
                "orange-light": "#FCD9B8",
                "orange-dark": "#FB9300",
                "green-dark": "#03A64A",
                light: "#ffffff",
                dark: "#17181D",
            },
        },
    },
    plugins: [],
};
