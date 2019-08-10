//import express framework
const express = require('express');

const app = express();
//automatically parses incoming data and is accessed in body 
app.use(express.json())

app.post('/event', (request, response) => {
    // name = '',
    // date: '',
    // items: [{}],
    // location
  const {
      name,
      date,
      items,
      location
  } = request.body;

  response.json({
      name,
      date,
      items,
      location
  })
})

// listen on port 3000
app.listen(3000, ()=> {
  console.log('server running in port 3000');
});
