//import express framework
const express = require('express');

const app = express();
//endpoint root
app.get('/', (request, response) => {
    response.json({
        message: 'Hola mundo desde express'
    })
});
// listen on port 3000
app.listen(3000, ()=> {
  console.log('server running in port 3000');
});
