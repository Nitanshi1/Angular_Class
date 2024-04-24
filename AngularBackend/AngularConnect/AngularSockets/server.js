///CHAT APPLICATIONNNNNNNNN


const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));
const colors = ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8', '#6610f2', '#fd7e14', '#6f42c1', '#e83e8c', '#20c997'];
const users = {};
const usernames = [];

io.on('connection', (socket) => {
    socket.emit('request username');

    socket.on('set username', (username) => {
        const colorIndex = Object.keys(users).length % colors.length;
        const color = colors[colorIndex];
        users[socket.id] = { username, color };
        usernames.push(username); // Push the new username into the array before emittin
        io.emit('user joined', { username, color });
        io.emit('usernames', usernames); // Emit the updated usernames array
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', { username: users[socket.id].username, message: msg, color: users[socket.id].color });
    });

    socket.on('disconnect', () => {
        if (users[socket.id]) {
            const username = users[socket.id].username;
            delete users[socket.id]; // Delete the user from the users object
            const index = usernames.indexOf(username);
            if (index !== -1) {
                usernames.splice(index, 1); // Remove the username from the usernames array
            }
            io.emit('user left', username + ' left the chat'); // Emit the user left event after updating data
        }
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on ${port}.....`);
});
