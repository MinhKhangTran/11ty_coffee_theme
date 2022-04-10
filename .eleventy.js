module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addWatchTarget("./src/scss/");

  // Returns products items, sorted by display order
  eleventyConfig.addCollection("products", (collection) => {
    return collection.getFilteredByGlob("./src/products/*.md");
  });

  // add shortcode for the year
  eleventyConfig.addShortcode("year", () => {
    return new Date().getFullYear();
  });
  // add filter for the year
  eleventyConfig.addFilter("year", () => {
    return new Date().getFullYear();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
