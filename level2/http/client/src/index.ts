import http from 'http'
import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const askServer = () => {
    rl.question('Hi, exit for close: ', (value) => {
        console.log("Sending: " + value + '...')
        let start = Date.now()
        const req = http.request({
            hostname: '127.0.0.1',
            port: 3000,
            pathname: '/',
            method: 'POST',
            headers: {
                'Content-Type': 'plain/text',
                'Content-Length': value.length,
            }
        }, (res) => {
            console.log(res.statusCode)

            res.on('data', (d) => {
                // console.log("Got: " + d)
                process.stdout.write(d);
                console.log()
                console.log('Success', Date.now() - start + 'ms')

                if(value !== 'exit') {
                    askServer()
                } else {
                    rl.close()
                }
            })
        })

        req.on('error', (e) => {
            console.error(e)
        })

        req.write(value)
        req.end()
    })
}

askServer()


