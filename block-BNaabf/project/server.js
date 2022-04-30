// first question
// - get relative path of `index.js`
//   - get absolute path of `index.js`
let qs = require('querystring');
let path = require('path');
let indexPath = path.join(__dirname, '/client/index.js');
console.log(indexPath);
console.log('../client/index.js');

let http = require('http');
let server = http.createServer(handleServer);
let fs = require('fs');
const { type } = require('os');

function handleServer(req, res) {
  if (req.method === 'GET' && req.url === '/form') {
    fs.readFile('form.html', (err, content) => {
      err ? err : 'OK';
      res.setHeader('Content-Type', 'text/html');

      res.end(content);
    });
  }

  if (req.url === '/form' && req.method === 'POST') {
    let store = '';
    req.on('data', (chunk) => {
      console.log(chunk);
      store = store + chunk;
    });
    req.on('end', () => {
        res.setHeader('content-type','text/html')
      let parse = qs.parse(store);
      res.write(`<h1>${parse.name}</h1>`);
      res.write(`<h2>${parse.email}</h2>`);
      res.write(`<p>${parse.age}</p>`);
      res.end();
    });
  }
}
server.listen(4000, () => {
  console.log('server is listening on port 4000');
});
