const path = require("node:path");
const sass = require("sass");
const htmlmin = require("html-minifier-terser");

const Book = require('./src/_includes/components/Book')
const Thought = require('./src/_includes/components/Thought')
const CertBadge = require('./src/_includes/components/CertBadge')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy({ "src/assets/images/favicon.png": "/" });

  eleventyConfig.addTemplateFormats("scss")

  eleventyConfig.addShortcode("Book", Book);
  eleventyConfig.addShortcode("Thought", Thought);
  eleventyConfig.addPairedShortcode("CertBadge", CertBadge);

  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/blog/**/*.md');
  });

  eleventyConfig.addCollection("tags", function(collection) {
        let tags = new Set();
        collection.getAll().forEach(item => {
            if (item.data.tags) {
                item.data.tags.forEach(tag => tags.add(tag));
            }
        });
        return Array.from(tags);
    });

  eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });

  eleventyConfig.addExtension("scss", { outputFileExtension: "css", useLayouts: false,
		compile: async function (inputContent, inputPath) {
			let parsed = path.parse(inputPath);
			let result = sass.compileString(inputContent, {
				loadPaths: [parsed.dir || ".", this.config.dir.includes]
			});
			this.addDependencies(inputPath, result.loadedUrls);
			return async (data) => { return result.css; };
		},
	});

  eleventyConfig.addTransform("htmlmin", function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
        minifyJS: true,
        minifyURLs: true,
        minifyCSS: true,
			});

			return minified;
		}

		return content;
	});
  
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
}