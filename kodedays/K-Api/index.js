//import express framework
const express = require('express');
//import mongoose
const mongoose = require('mongoose');

//import cors
const cors = require('cors');

const event = require('./usecases/event')

const app = express();
//automatically parses incoming data and is accessed in body 
app.use(express.json())
app.use(cors());
//list all elements
app.get('/events',async (request, response) => {
    try {
        const allEvents = await event.getAll()
        console.log(allEvents);
        response.json({
            success: true,
            message: 'All events',
            data: {
                events: allEvents
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})



app.post('/events',async (request, response) => {
    try {
        const {
            name,
            date,
            items,
            location
        } = request.body;
        console.log(request.body)
        const createEvent = await event.create({ name, date, items, location})

        response.json({
            success: true,
            message: 'Event created!',
            data: {
                event: createEvent
            }
        })

        response.json({
            name,
            date,
            items,
            location
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }  
 })

app.get('/events/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const foundEvent = await event.getById(id);

        response.json({
            success: true,
            message: 'Event found',
            data: {
                event: foundEvent
            }
        })
    } catch (error) {
        response.status(400);
        response.json({
            success: false,
            error: error.message
        })
    }
})

app.put('/events/:id/items/:index', async (request, response ) => {
    try {
        const { id, index} = request.params;
        const { name } = request.body;

        const updatedEvent = await event.assignCarrier(id, index, name);

        response.json({
          success: true,
          message: 'Carried assigned',
          data: {
              events: updatedEvent
          }
        })
    } catch (error) {
        response.status(400);
        response.json({
            succes: false,
            error: error.message
        })
    }
})

mongoose.connect('mongodb+srv://Yordani:Jadeninja93@clusterk-lv2l4.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true

}, (error ) => {
    if (error ) return console.error('ERROR', error)
    console.log('DB CONNECTED!')
    // listen on port 3000
    app.listen(8080, () => {
        console.log('server running in port 8080');
    });
})
