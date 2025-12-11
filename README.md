# josh_blog

### Initial Setup Commands
* npm init -y
* npm i -D @11ty/eleventy
* npm i -D common-tags
* npx @11ty/eleventy --serve
* npm install sass
* npm install @11ty/eleventy-plugin-webc
* npm i -D html-minifier-terser

### Run Dev Server
* `npm start`
* Browse to: http://localhost:8080

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
* Add note about ~/.ssh/config being needed anytime you have a non-standard ssh-key file name to your snippets.
* Correct pluralsight link.
* See if you can remove the `.nojekyll` file.
* Update page titles
* Finish portfolio

  ### WebC Conclusions so Far
  * It seems that to use a webC component, you have to be in a webC page.
  * A web see page cannot use a nunjucks include
    * It has to be a webc component to use it.

### Left off:
* https://www.youtube.com/watch?v=X-Bpjrkz-V8

### Images Used:
* https://www.svgrepo.com/svg/522622/phone

### Resources
* https://www.11ty.dev
* https://www.youtube.com/watch?v=uzM5lETc6Sg&list=PLtLXFsdHI8JTwScHvB924dY3PNwNJjjuW
* https://www.11ty.dev/docs/projects/
* https://11ty.rocks/eleventyjs/data-arrays/
* https://www.11ty.dev/docs/shortcodes/
* https://github.com/11ty/eleventy/issues/411#issuecomment-1296897934
* https://bnijenhuis.nl/notes/adding-a-favicon-in-eleventy/
* https://www.11ty.dev/docs/languages/webc/
#### Setup with Github Pages
* https://github.com/marketplace/actions/eleventy-action
* https://snook.ca/archives/servers/deploying-to-github-pages-using-actions
* https://quinndombrowski.com/blog/2022/05/07/hosting-eleventy-on-github-pages/
* https://github.com/quinnanya/quinnanya.github.io/blob/main/.github/workflows/build.yml
* https://maarten.be/blog/20220730/how-to-deploy-your-eleventy-website-to-github-pages-with-github-actions/
* https://www.dawidsblog.com/posts/tutorial_11ty_github_pages/

### Icons
* https://www.svgrepo.com/svg/478980/speech-bubble-1
* https://www.svgrepo.com/svg/479372/reading
* https://www.svgrepo.com/svg/482480/student-cap