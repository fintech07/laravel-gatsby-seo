const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Volumes/Data/MyWork/Lost-Art(Laravel_React_NextJS)/lostart/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-page-temp-js": hot(preferDefault(require("/Volumes/Data/MyWork/Lost-Art(Laravel_React_NextJS)/lostart/src/templates/page-temp.js"))),
  "component---src-templates-project-temp-js": hot(preferDefault(require("/Volumes/Data/MyWork/Lost-Art(Laravel_React_NextJS)/lostart/src/templates/project-temp.js"))),
  "component---src-templates-projects-js": hot(preferDefault(require("/Volumes/Data/MyWork/Lost-Art(Laravel_React_NextJS)/lostart/src/templates/projects.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Volumes/Data/MyWork/Lost-Art(Laravel_React_NextJS)/lostart/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Volumes/Data/MyWork/Lost-Art(Laravel_React_NextJS)/lostart/src/pages/index.js")))
}

