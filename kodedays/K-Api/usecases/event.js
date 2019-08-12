const Event = require('../models/event');

function create({ name, location, items, date }) {
  //one method of creating a new document
  //const newEvent = new Event({ name, location, items, date})
  //newEvent.save();

  //using create
  //const newEvent = Event.create({ name, location, items, date})

  //shortcut
    return Event.create({ name, location, items, date });
}
//get values
function getAll () {
    //if no paramaters are given returns all
    //pass a paramater to defined the value to get
  return Event.find({}).lean();
  //research .lean() in docs
}

function getById (id) {
    //get by individual property id
    return Event.findById(id).lean()
}

async function assignCarrier (eventId, indexItem, carrierName   ) {
 const event = await Event.findById(eventId);
 event.items[indexItem].carrier = carrierName
 return event.save();
}


module.exports = {
    create,
    getAll,
    getById,
    assignCarrier
}