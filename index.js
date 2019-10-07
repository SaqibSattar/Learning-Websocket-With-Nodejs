const express = require('express');
const socket = require('socket.io');

// create server
const app = express();

const server = app.listen(5000, function(){
    console.log('Server is listening the port on 5000' );
});

// Add Ref to static files
app.use(express.static('public'));

// socket setup
const io = socket(server);
io.on('connection', function(socket){
    console.log('Connection has made successfully', socket.id);  
    
socket.on('chat', function(data){
    io.sockets.emit('chat', data);
});

});