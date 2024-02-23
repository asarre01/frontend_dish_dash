/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "orange-light": "#FFECD1",
                "orange-dark": "#FB9300",
                "green-dark": "#03A64A",
                light: "#FAF9FB",
                dark: "#0C0C0D",
            },
        },
    },
    plugins: [],
};
