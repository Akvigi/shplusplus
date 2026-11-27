import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
import {createSocket} from 'dgram';

const hostname = 'localhost';
const portTarget = 3000;

const socket = createSocket('udp4')
let start: {
    text: string | undefined
    date: number
} = {date: Date.now(), text: undefined}

socket.on('message', (msg) => {
    const textMsg = msg.toString()
    console.log('Successful comeback: ',textMsg, (Date.now() - start.date)+'ms')
    if (textMsg === start.text) {
        console.log('Text identical')
    } else {
        console.log("Text differs")
    }
    if (msg.toString() !== 'exit') {
        askServer()
    } else {
        rl.close()
        socket.send(Buffer.from('Client closed connection'), portTarget, hostname, () => {
            socket.close()
        })
    }
})

const askServer = () => {
    rl.question('Hi, exit for close: ', (value) => {
        console.log("Sending: " + value + '...')
        start = {date: Date.now(), text: value}
        const msg = Buffer.from(value)
        socket.send(msg, portTarget, hostname, (err) => {
            if(!err) {
                console.log("Successful sent!")
            }
        })
    })
}

askServer()


