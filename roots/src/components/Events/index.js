import React, { Component} from 'react';

import styles from './index.module.css';

class Events extends Component {
  render() {
      return (
        <div  classNames={styles.Events}>
          eventos!
        </div>    
      );
  }
}
//make class available to other modules by exporting 
export default Events;