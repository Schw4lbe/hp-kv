module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserlist: ["> 1%", "last 2 versions", "Firefox ESR"],
      grid: true,
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
