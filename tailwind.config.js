module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontSize: {
            xs: ".75rem",
            sm: ".875rem",
            tiny: ".875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "1.5xl": "1.375rem",
            "2xl": "1.5rem",
            "2.5xl": "1.625rem",
            "3xl": "1.875rem",
            "3.5xl": "2rem",
            "4xl": "2.25rem",
            "4.5xl": "2.625rem",
            "5xl": "3rem",
            "6xl": "4rem",
            "7xl": "5rem",
        },
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }

            "sm-min": { min: "480px" },
            // => @media (min-width: 480px) { ... }
        },
        extend: {
            boxShadow: {
                "primary-shadow": "5px 5px 14px -4px #000000a3",
            },
            fontFamily: {
                "open-sans-font": ["Open Sans", "sans-serif"],
                "rubik-font": ["Rubik", "sans-serif"],
                "roboto-font": ["Roboto", "sans-serif"],
            },
            colors: {
                "primary-gradient": "linear-gradient(16deg, rgba(17,164,239,1) 0%, rgba(17,190,239,1) 51%)",
                "primary-color": "rgb(17,149,239)",
                // "primary-color": "#E5ECFB",

                "secondary-color": "#172B4D",
                "tertiary-color": "#FFD900",
            },
        },
    },
    plugins: [],
};
