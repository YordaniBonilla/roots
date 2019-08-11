import React, { Component} from 'react';

import styles from './index.module.css';

import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [{
                name: 'peda kodemia',
                location: 'en mi casa',
                date: '2019-07-18',
                items: [{},{},{}]
            }]
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3000/events');

        const { data = {}} = await response.json()

        const { events } = data;

        this.setState({ events});
    }

    render() {
      return this.state.events.map((event) => (
        <div  classNames={styles.Event}>
          <Card style={{ width: '18rem' }}>
            <Card.Header>
                {/*use {} for interpolation */}
                <div>{ event.name }</div> 
                <div>{ event.location }</div>
                <div>{ event.date }</div>
            </Card.Header>
            <ListGroup variant="flush">
              {
                event.items.map((item)=> (
                    <ListGroup.Item>
                        <div>{ item.quantity} * { item.name }</div>
                        <div>quien lo va a llevar: { item.carrier }</div>
                    </ListGroup.Item>    
                  ))
              }
            </ListGroup> 
          </Card>
        </div> 
      ))
  }
}
//make class available to other modules by exporting 
export default Events;