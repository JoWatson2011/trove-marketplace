/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,jsx}"],
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
      },
      backgroundImage: (theme) => ({
        stripes:
          "linear-gradient(45deg, transparent 25%, black 25%, black 50%, transparent 50%, transparent 75%, black 75%, black)",
      }),
      clipPath: {
        half: "inset(50% 0% 0 0)",
        "half-right": "inset(0 0 50% 0%)",
      },
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-half": {
          "clip-path": "inset(0 0 50% 0)",
        },
        ".clip-half-right": {
          "clip-path": "inset(50% 0 0 00)",
        },
        ".bg-stripes": {
          "background-image":
            "linear-gradient(45deg, transparent 25%, green 25%, green 50%, transparent 50%, transparent 75%, green 75%, green)",
          "background-size": "20px 20px",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
