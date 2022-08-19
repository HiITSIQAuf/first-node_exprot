const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to my home page')
    }
    if(req.url === '/about'){
        res.end('Here is a short history')
    }
    if(req.url === '/error'){
        res.end(`
    <h1>Oops!</h1>
    <p> we can't seem to find the page you are looking for</p>
    <a href="/">Back home</a>
    `)
    }

}
)
server.listen(5000)