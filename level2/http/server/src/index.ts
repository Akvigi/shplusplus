// const https = require('node:https')
import {createServer} from 'http';
import type {AddressInfo} from "node:net";

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((
    request, response
) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain')
    if(
        request.method?.toLowerCase() === 'post'
    ) {
        let body = ''
        request.on("data", (v) => {
            body += v
        })

        request.on('end', () => {
            console.log("message:", body)
            console.log("date:", new Date().toUTCString())
            console.log("ip:", request.socket.remoteAddress)
            response.end(body)
        })
        request.socket.on('close', () => {
            console.log("connection closed")
        })
    } else {
        response.end('Hello world!')
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});