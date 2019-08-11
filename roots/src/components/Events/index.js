import React, { Component} from 'react';

import styles from './index.module.css';

import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';

class Events extends Component {
  render() {
      return (
        <div  classNames={styles.Events}>
          <Card style={{ width: '18rem' }}>
            <Card.Header>Featured</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup> 
          </Card>
        </div>    
      );
  }
}
//make class available to other modules by exporting 
export default Events;