const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
 
  // set header content type 3 steps: setHeader, write, end

  /* res.setHeader('Content-Type', 'text/html')
  res.write('<p>hello</p>');
  res.write('<p>hello2</p>');
  res.end(); */
  
  // end of block

  
  //routing
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }

  //send a html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for the requests on port 3000");
});
