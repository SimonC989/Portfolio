const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/simonchan/Desktop/Projects/Portfolio/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/simonchan/Desktop/Projects/Portfolio/src/pages/my-files.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/simonchan/Desktop/Projects/Portfolio/src/pages/resume.js")))
}

