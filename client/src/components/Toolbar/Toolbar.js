import React from 'react';
import './Toolbar.css';
import BurgerMenu from '../SideDrawer/BurgerMenu';
import LogoSvg from '../Images/Logos/logo.svg';

import { Link } from 'react-router-dom';


const Toolbar = props => (
<header className="toolbar">
    <nav className="toolbar-navigation">
        <div><BurgerMenu click={props.drawerClickHandler}/></div>
        <div className="toolbar-logo"><Link to="/"><img src={LogoSvg} alt=""/></Link></div>
        <div className="spacer"/>
        <div className="toolbar-navigation-items">
            <ul>
              <Link to="/"><li>HOME</li></Link>
              <Link to="/about"><li>ABOUT</li></Link>            
              <Link to="/experience"><li>EXPERIENCE</li></Link>
              <Link to="/services"><li>SERVICES</li></Link>
              <Link to="/contact"><li>CONTACT</li></Link>              
            </ul>
        </div>
    </nav>
</header>
);


export default Toolbar;