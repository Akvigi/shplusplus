// const https = require('node:https')
import http from 'http'

const req = http.request({
    hostname: '127.0.0.1:3000',
    port: 443,
    pathname: '/',
    method: 'GET'
}, (res) => {
    console.log(res.statusCode)

    res.on('data', (d) => {
        process.stdout.write(d);
    })
})

req.on('error', (e) => {
    console.error(e)
})

req.end()