# josh_blog

### Initial Setup Commands
* npm init -y
* npm i -D @11ty/eleventy
* npm i -D common-tags
* npx @11ty/eleventy --serve
* npm install sass
* npm install @11ty/eleventy-plugin-webc
* npm i -D html-minifier-terser

### Notes
* This uses `nunjucks` for templating.
* To be posiive a config change worked, sometimes you need to delete the `_site` folder and then re-run: `npm run build` so it gets regenerated.

### To Do
* Optimize CSS
* Optimize JS
* Add Udemy Classes
* Combine podcasts and podcasts-recommended json files.
* Add mobile category to tech spectrum
* Convert site to use webc components
  * Ref: https://www.youtube.com/watch?v=p0wDUK0Z5Nw

### Resources
* https://www.11ty.dev
* https://www.youtube.com/watch?v=uzM5lETc6Sg&list=PLtLXFsdHI8JTwScHvB924dY3PNwNJjjuW
* https://www.11ty.dev/docs/projects/
* https://11ty.rocks/eleventyjs/data-arrays/
* https://www.11ty.dev/docs/shortcodes/
* https://github.com/11ty/eleventy/issues/411#issuecomment-1296897934
* https://bnijenhuis.nl/notes/adding-a-favicon-in-eleventy/
* https://www.11ty.dev/docs/languages/webc/