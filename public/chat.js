// Making connection on front end
var socket = io.connect('http://localhost:5000');

// Query DOM

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

// Emit Event

btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
});

// Listen for event
socket.on('chat', function(data) {
    output.innerHTML += "<p><strong> " + data.handle + ": </strong>" + data.message + "</p>";
})