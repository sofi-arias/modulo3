var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor
http
  .createServer((req, ser) => {
    const name = req.url.slice(1);
    const files = fs.readdirSync("./images");

    for (const file of files){
        if (file.includes(name)) {
            res.writeHead(200, { "Content-type":"image/jpg" });
            const img = fs.readFileSync(`./images/${name}_doge.jpg`);
            res.end(img);
        }
    }
    return res.writeHead(404).end("Not found 404");
  })
    .listen(3001, "localhost");