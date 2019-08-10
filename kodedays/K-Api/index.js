//import express framework
const express = require('express');
//import mongoose
const mongoose = require('mongoose');

const event = require('./models/usecases/event')

const app = express();
//automatically parses incoming data and is accessed in body 
app.use(express.json())

//list all elements
app.get('/events', async (request, response) => {
  const allEvents = await event.getAll();
  response.json({
      //if successful does true
      success: true,
      //request message
      message: 'All events',
      //data contains array of events
      data: {
          events: allEvents
      }
  })
})

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



mongoose.connect('mongodb+srv://Yordani:<password>@clusterk-lv2l4.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true

}), (error ) => {
    if (error ) return console.error('ERROR', error)
    console.log('DB CONNECTED!')
    // listen on port 3000
    app.listen(3000, () => {
        console.log('server running in port 3000');
    });
}
