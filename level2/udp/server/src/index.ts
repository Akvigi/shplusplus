import {createSocket} from 'dgram';

const port = 3000;

const socket = createSocket('udp4')

socket.on('message', (msg, info) => {
    socket.send(msg, info.port, info.address)
    console.log("message:", msg.toString())
    console.log("date:", new Date().toUTCString())
    console.log("ip:", info.address+":"+info.port)
})

socket.bind(port)