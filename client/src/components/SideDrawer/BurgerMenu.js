import React from 'react';

import './BurgerMenu.css';

const BurgerMenu = props => {
    let menuClass = 'burgerMenu-button';

    return(<button className={menuClass} onClick={props.click}/>);
    
};

export default BurgerMenu;