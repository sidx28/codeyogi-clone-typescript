module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        bullets: {
          css: { "--tw-prose-bullets": theme("colors.black") },
        },
      }),
    },
  },
  plugins: [],
};
