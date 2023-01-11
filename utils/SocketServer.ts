import http from 'http'
import express from 'express'

export default class SocketServer {
    static init() {
        const serverPort = 3008
    
        const app = express()
        const server = http.createServer(app)
        const webSocketServer = new WebSocket.Server()
    }
}