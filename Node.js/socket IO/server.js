const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start the server
const port = 3000;
http.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Socket.IO logic
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle events
  socket.on('chat message', (message) => {
    console.log('Received message:', message);
    io.emit('chat message', message); // Broadcast the message to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
