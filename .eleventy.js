module.exports = function (eleventyConfig) {
  // Pass through the entire assets folder to the output
  eleventyConfig.addPassthroughCopy("assets");
  // Pass through these files to the output
  eleventyConfig.addPassthroughCopy("robots.txt");

// directs sitemap to sitemap.xml
return {
  dir: {
    input: ".",
    output: "_site"
  },
  // optional override for template file extensions
  templateFormats: ["njk", "md"]
};