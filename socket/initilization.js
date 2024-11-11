import { Server as SocketIOServer } from "socket.io";
import { socket_modules } from "./socket_modules.js";
let io;

function initSocket(server) {
    io = new SocketIOServer(server);
    io.on("connection", (socket) => {
        console.log(`Socket connected: ${socket.id}`)
        socket_modules(io, socket);
        socket.on("disconnect", () => {
            console.log(`Socket connected: ${socket.id}`)
        })
    })
}
export { initSocket, io };