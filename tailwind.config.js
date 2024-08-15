/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        "block-action-button": `
        1px -1px 1px 1px black,
        2px -2px 1px 2px black,
        3px -3px 1px 2px black
        `,
        "button-hover": `
        2px -2px 1px 1px black
        `,
      }
    },
  },
  plugins: [],
};
