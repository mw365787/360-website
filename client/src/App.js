import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Quote from './components/Quote/Quote';
import Contact from './components/Contact/Contact';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  

  drawerToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
  
  render() {
    
    const App = () => {
      return (
        <div>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/services" component={Services} />
            <Route path="/quote" component={Quote} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer/>
        </div>
      );
    }
    let backdrop;
    

        if(this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }
    return(
      
      <div style={{height: '100%', width: '100%'}}>
     
        <main>    
           <Switch>
             <App/>
          </Switch>
        </main>
          
      </div>
      
    );
  }
}

export default App;
