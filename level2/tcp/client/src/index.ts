import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const askServer = () => {
    rl.question('Hi, exit for close: ', (value) => {
        console.log("Sending: " + value + '...')
        let start = Date.now()

        if (value !== 'exit') {
            askServer()
        } else {
            rl.close()
        }
    })
}

askServer()


