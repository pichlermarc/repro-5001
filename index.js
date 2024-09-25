const http = require("http");
const winston = require('winston');

const logger = winston.createLogger({
    transports: [new winston.transports.Console()],
})

const server = http.createServer((req, res) => {
    logger.info('handling request');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
