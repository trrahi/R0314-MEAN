let http = require("http");
http.createServer((req, res) => {
    if (req.url === "/") {
        console.log("perussettii");
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write("perussettiiii")
        res.end("<h1>Terve</h1>\n");
    } else if (req.url === "/moi") {
        console.log("no moro poro");
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write("morooporooo")
        res.end("<h1>Heippaaaa</h1>\n");
    }

}).listen(8001);
