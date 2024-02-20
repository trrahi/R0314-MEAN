const http = require('http');
const PORT = 3000;
// Import the URL module
const url = require("url");

// Make our HTTP server
const server = http.createServer((req, res) => {
    // Parse the request url
    const reqUrl = url.parse(req.url).pathname
    if (reqUrl == "/") {

        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.writeHead(200);
        res.write("Olet hakemistossa öäå/")
        res.end()
    }
    else if (reqUrl == "/hello") {
        res.setHeader('Content-Type', 'text/HTML; charset=utf-8');
        res.writeHead(200);
        res.write(`<h1>Olet hakemistossa /hello</h1>`)
        res.end(`<p>...ja sillä selvä...</p>`)

    } else {
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.write(`{"message": "Hakemaasi sivua ei löydy - 404 Not Found"}`);
        res.end(`{"message": "This is a JSON response"}`);

    }
})
// Bind the server to a specific port and start listening for incoming connections
server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

//  Open the terminal and run the file using the command node 02_http_server_routes.js