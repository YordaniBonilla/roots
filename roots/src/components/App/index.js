import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './index.module.css';
import Navbar from 'react-bootstrap/Navbar'
import Events from '../Events'

function App() {
    return (
        <div className={styles.App}>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />
                    {' root'}
                </Navbar.Brand>
            </Navbar>
            <div className={styles.Main}>
              <Events/>
            </div>
        </div>    
    );
}

export default App;