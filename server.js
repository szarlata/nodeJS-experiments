const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // set header content type 3 steps: setHeader, write, end

  res.setHeader('Content-Type', 'text/html')
  res.write('<p>hello</p>');
  res.write('<p>hello2</p>');
  res.end();
});




server.listen(3000, 'localhost', () => {
  console.log("listening for the requests on port 3000");
});
