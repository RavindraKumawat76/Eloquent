// Another central module is called http. It provides functionality for running HTTP servers and making HTTP requests.

// This is all it takes to start an HTTP server:
const {createServer} = require("http");
let server = createServer((request, response) => {
  console.log(request);
  //console.log(response);
  console.log('-----------------')
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>`);
  response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");




// To act as an HTTP client, we can use the request function in the http module.
const {request} = require("http");
let requestStream = request({
  hostname: "eloquentjavascript.net",
  path: "/20_node.html",
  method: "GET",
  headers: {Accept: "text/html"}
}, response => {
  console.log("Server responded with status code",
              response.statusCode);
});
requestStream.end();