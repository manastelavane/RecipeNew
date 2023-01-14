/* eslint-disable linebreak-style */
import dotenv from "dotenv";
import express from "express";
import {harperSaveMessage} from "./services/harper-save-message.js";
import {harperGetMessages} from "./services/harper-get-messages.js";
import http from "http";
import cors from "cors";
import {leaveRoom} from "./utils/leave-room.js";
import { Server } from "socket.io";
const app = express();

dotenv.config();
app.use(cors()); 

const server = http.createServer(app); 
// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

const CHAT_BOT = "ChatBot";
let chatRoom = ""; 
let allUsers = []; // All users in current chat room
// Listen for when the client connects via socket.io-client
io.on("connection", (socket) => {
    // console.log(`User connected ${socket.id}`);
    socket.on("send_message", (data) => {
        const { message, username, room, __createdtime__ } = data;
        io.in(room).emit("receive_message", data);
        harperSaveMessage(message, username, room, __createdtime__) 
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    });


    // Add a user to a room
    socket.on("join_room", (data) => {
        const { username, room } = data; // Data sent from client when join_room event emitted
        socket.join(room); // Join the user to a socket room
        harperGetMessages(room)
            .then((last100Messages) => {
                socket.emit("last_100_messages", last100Messages);
            })
            .catch((err) => console.log(err));
        let __createdtime__ = Date.now(); 
        // Send message to all users currently in the room, apart from the user that just joined
        socket.to(room).emit("receive_message", {
            message: `${username} has joined the chat room`,
            username: CHAT_BOT,
            __createdtime__,
        });
        socket.emit("receive_message", {
            message: `Welcome ${username}`,
            username: CHAT_BOT,
            __createdtime__,
        });
        chatRoom = room;
        allUsers.push({ id: socket.id, username, room });
        let chatRoomUsers = allUsers.filter((user) => user.room === room);
        socket.to(room).emit("chatroom_users", chatRoomUsers);
        socket.emit("chatroom_users", chatRoomUsers);
    });


    socket.on("leave_room", (data) => {
        const { username, room } = data;
        socket.leave(room);
        const __createdtime__ = Date.now();
        // Remove user from memory
        allUsers = leaveRoom(socket.id, allUsers);
        socket.to(room).emit("chatroom_users", allUsers);
        socket.to(room).emit("receive_message", {
            username: CHAT_BOT,
            message: `${username} has left the chat`,
            __createdtime__,
        });
    // console.log(`${username} has left the chat`);
    });


    socket.on("disconnect", () => {
    // console.log('User disconnected from the chat');
        const user = allUsers.find((user) => user.id == socket.id);
        if (user?.username) {
            allUsers = leaveRoom(socket.id, allUsers);
            socket.to(chatRoom).emit("chatroom_users", allUsers);
            socket.to(chatRoom).emit("receive_message", {
                message: `${user.username} has disconnected from the chat.`,
            });
        }
    });



});

server.listen(4000, () => "Server is running on port 4000");