import React from 'react';

function importAll(r) {
    return r.keys().map(r);
  }

const images = importAll(require.context('./Images/WorkExamples', false, /\.(png|jpe?g|svg)$/));

export default class Gallery extends React.Component{
    render(){
        
        const items = [];

        for (let index = 0; index < images.length; index++) {
            items[index] = <div className="WorkExample"><img className="ImageExample" src={images[index]} alt="" /></div>;  
        }

        return items;
    }
}