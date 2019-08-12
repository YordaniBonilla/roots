import React, { Component} from 'react';

import styles from './index.module.css';

import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';

class Events extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/events');

        const { data = {}} = await response.json()

        const { events } = data;

        this.setState({ events });
    }

    render() {
      return this.state.events.map((event) => (
        <div  classNames={styles.Event}>
          <Card style={{ width: '18rem' }}>
            <Card.Header>
                {/*use {} for interpolation */}
                <div>title: { event.name }</div> 
                <div>location: { event.location }</div>
                <div>When: { event.date }</div>
            </Card.Header>
            <ListGroup variant="flush">
              {
                event.items.map((item)=> (
                    <ListGroup.Item>
                        <div>Product: { item.quantity},{ item.name }</div>
                        <div>Carrier: { item.carrier }</div>
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