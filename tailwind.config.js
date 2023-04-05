const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Inter", ...defaultTheme.fontFamily.sans],
      body: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
    },
    letterSpacing: {
      tight: "-0.015em",
    },
    extend: {
      fontFamily: {
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      screens: {
        tablet: "520px",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": colors.gray[700],
            "--tw-prose-headings": colors.gray[900],
            "--tw-prose-lead": colors.gray[600],
            "--tw-prose-links": colors.gray[900],
            "--tw-prose-bold": colors.gray[900],
            "--tw-prose-counters": colors.gray[500],
            "--tw-prose-bullets": colors.gray[300],
            "--tw-prose-hr": colors.gray[200],
            "--tw-prose-quotes": colors.gray[900],
            "--tw-prose-quote-borders": colors.gray[200],
            "--tw-prose-captions": colors.gray[500],
            "--tw-prose-code": colors.gray[900],
            "--tw-prose-pre-code": colors.gray[200],
            "--tw-prose-pre-bg": colors.gray[800],
            "--tw-prose-th-borders": colors.gray[300],
            "--tw-prose-td-borders": colors.gray[200],
            "--tw-prose-invert-body": colors.gray[400],
            "--tw-prose-invert-headings": colors.gray[100],
            "--tw-prose-invert-lead": colors.gray[500],
            "--tw-prose-invert-links": colors.gray[100],
            "--tw-prose-invert-bold": colors.gray[100],
            "--tw-prose-invert-counters": colors.gray[500],
            "--tw-prose-invert-bullets": colors.gray[700],
            "--tw-prose-invert-hr": colors.gray[800],
            "--tw-prose-invert-quotes": colors.gray[200],
            "--tw-prose-invert-quote-borders": colors.gray[800],
            "--tw-prose-invert-captions": colors.gray[500],
            "--tw-prose-invert-code": colors.gray[100],
            "--tw-prose-invert-pre-code": colors.gray[400],
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": colors.gray[700],
            "--tw-prose-invert-td-borders": colors.gray[800],
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
