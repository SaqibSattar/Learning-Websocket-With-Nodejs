const express = require('express');

// create server
const app = express();

app.listen(5000, function(){
    console.log('Server is listening the port on 5000' );
});

// Add Ref to static files
app.use(express.static('public'));