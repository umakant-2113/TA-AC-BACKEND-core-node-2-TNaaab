// 1. console.log(\_\_dirname);
// 2. console.log(\_\_filename);
// 3. use path module to join `__dirname` and `server.js`

const path = require("path");
console.log(__dirname,__filename)
const indexPath = path.join(__dirname, "server.js");
console.log(indexPath)

