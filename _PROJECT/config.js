module.exports = {
  config: {
    tailwindjs: "./tailwind.config.js",
    port: 9050,
  },
  paths: {
    root: "./static/",
    base: "./static/",
    src: {
      css: "./static/src/css",
      js: "./static/src/js",
    },
    build: {
      css: "./static/build/css",
      js: "./static/build/js",
    },
  },
  content: ["./*.php", "./**/*.php"],
  extend: {
    colors: {
      "flag-red": "#E22739",
      "flag-orange": "#E84E0F",
      "flag-rose": "#E01E62",
      "flag-rose-light": "#DF497C",
      "flag-lilac": "#C764BD",
      "flag-blue": "#1FA7EE",
      "flag-blue-dark": "#4C5DDF",
      "flag-yellow": "#ECAC00",
      "flag-cyan": "#15BC8F",
      "flag-green": "#83B436",
      "flag-gray": "#6C6C6C",
    },
    /*   typography: ({ theme }) => ({
      flag: {
        css: {
          "--tw-prose-headings": theme("colors.flag-orange"),
          "--tw-prose-body": theme("colors.flag-gray"),
          "--tw-prose-pre-code": theme("colors.white"),
          "--tw-prose-pre-bg": theme("colors.flag-orange"),
          "--tw-prose-links": theme("colors.flag-orange"),
          "--tw-prose-code": theme("colors.flag-blue"),
          "--tw-prose-bold": theme("colors.flag-orange"),
          "--tw-prose-counters": theme("colors.flag-blue"),
          "--tw-prose-bullets": theme("colors.flag-blue"),
          "--tw-prose-captions": theme("colors.flag-blue"),
          "--tw-prose-lead": theme("colors.flag-blue"),
          "--tw-prose-hr": theme("colors.flag-blue"),
          "--tw-prose-quotes": theme("colors.flag-orange"),
          "--tw-prose-quote-borders": theme("colors.flag-blue"),
        },
      },
    }), */
    fontFamily: {
      mulish: ["Mulish, sans-serif"],
      poppins: ["Poppins, sans-serif"],
    },
    fontSize: {
      xsmall: [".631rem"],
    },
    boxShadow: {
      flag: "0 2px 8px 0px rgba(145, 140, 153, 0.25)",
    },
    backgroundPosition: {
      search: "right bottom",
    },
  },
};
