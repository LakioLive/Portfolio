import type { Config } from "tailwindcss";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import svgToDataUri from "mini-svg-data-uri";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "light-blue": "#0077FF",
                "react-blue": "#7cdffe",
                "dark-gray": "#1a1a1a",
                "light-gray": "#a9a9a9",
            },
        },
    },
    plugins: [
        addVariablesForColors,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function ({ matchUtilities, theme }: any) {
            matchUtilities(
                {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    "bg-grid": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                        )}")`,
                    }),
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    "bg-grid-small": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                        )}")`,
                    }),
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    "bg-dot": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
                        )}")`,
                    }),
                },
                {
                    values: flattenColorPalette(theme("backgroundColor")),
                    type: "color",
                },
            );
        },
    ],
} satisfies Config;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
    const allColors = flattenColorPalette(theme("colors"));
    const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
    );

    addBase({
        ":root": newVars,
    });
}
