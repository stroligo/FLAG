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
  content: ["./*.html", "./**/*.html"],
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
    /*  typography: ({ theme }) => ({
      inovahc: {
        css: {
          "--tw-prose-headings": theme("colors.inovahc.green[800]"),
          "--tw-prose-body": theme("colors.inovahc.gray[400]"),
          "--tw-prose-pre-code": theme("colors.white"),
          "--tw-prose-pre-bg": theme("colors.inovahc.green[800]"),
          "--tw-prose-links": theme("colors.inovahc.green[800]"),
          "--tw-prose-code": theme("colors.inovahc.green[500]"),
          "--tw-prose-bold": theme("colors.inovahc.green[800]"),
          "--tw-prose-counters": theme("colors.inovahc.green[500]"),
          "--tw-prose-bullets": theme("colors.inovahc.green[500]"),
          "--tw-prose-captions": theme("colors.inovahc.green[500]"),
          "--tw-prose-lead": theme("colors.inovahc.green[500]"),
          "--tw-prose-hr": theme("colors.inovahc.green[500]"),
          "--tw-prose-quotes": theme("colors.inovahc.green[800]"),
          "--tw-prose-quote-borders": theme("colors.inovahc.green[500]"),
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
      inovahc: "0 2px 8px 0px rgba(145, 140, 153, 0.25)",
    },
    backgroundPosition: {
      search: "right bottom",
    },
  },
};
