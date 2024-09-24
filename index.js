const https = require("https");

https.get({
    host: 'www.example.com',
}, (response) => {
    const body = [];
    response.on('data', (chunk) => body.push(chunk));
    response.on('end', () => {
        console.log(body.toString());
    });
});