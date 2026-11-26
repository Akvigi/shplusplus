import {createSocket} from 'dgram';

const hostname = '127.0.0.1';
const port = 3000;

const socket = createSocket('udp6')

socket.on('message', (msg) => {
    socket.send(msg)
    console.log(msg)
})

socket.bind(port)