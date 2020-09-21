const path = require("path");
// console.log(path.dirname(process.mainModule.filename));

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

console.log(p);
