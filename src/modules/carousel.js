// Taken from https://webpack.js.org/guides/dependency-management/
const imageCache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context("../images/", false, /\.jpg$/));
