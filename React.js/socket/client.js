const socket = io(); // Connect to the server

// Send a message to the server
socket.emit('message', 'Hello from client');

// Listen for a custom event 'message' from the server
socket.on('message', (data) => {
  console.log('Received message:', data);
});
