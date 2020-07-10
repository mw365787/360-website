import React from 'react';

import './SideDrawer.css';

import { Link } from 'react-router-dom';

const SideDrawer = props => {
    let drawerClasses = 'sideDrawer';

    if(props.show) {
        drawerClasses = 'sideDrawer open';
    }
    return(
    <nav className={drawerClasses}>
            <ul>
              <Link to="/"><li>HOME</li></Link>
              <Link to="/about"><li>ABOUT</li></Link>            
              <Link to="/experience"><li>EXPERIENCE</li></Link>
              <Link to="/services"><li>SERVICES</li></Link>
              <Link to="/contact"><li>CONTACT</li></Link> 
            </ul>
    </nav>
);
};

export default SideDrawer;