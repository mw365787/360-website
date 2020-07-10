import React from 'react';
import Gallery from '../Gallery';


import './Home.css';
import OneSvg from '../Images/Logos/1.svg';
import TwoSvg from '../Images/Logos/2.svg';
import ThreeSvg from '../Images/Logos/3.svg';

import { Link } from 'react-router-dom';


export default class Home extends React.Component {


    render(){
        
    return(
          
    <div className="Home">
      <style>
        @import url("https://use.typekit.net/scf5hzg.css");
      </style>
      
      <div className="Firstview">
          {/*Sentences*/}
          <div id="firstSentence">
             THE NEW {"\n"}VIRTUAL {"\n"}AGENCY {"\n"}THAT'S{"\n"}ACTUALLY {"\n"}MORE {"\n"}REAL!
          </div>
          <div id="secondsentence">
            Real {"\n"}talent at {"\n"}real {"\n"}value!
          </div>
          <Link to="/quote"><div className="quote">GET A {"\n"}QUOTE</div></Link>
       </div>
          
          <div id="firstInfo">
            We're a talented new virtual 360° full {"\n"}service creative agency at a fraction {"\n"}of the traditional cost! <Link to="/contact">Try us and see.</Link>
          </div>
          <div id="secondInfo">
            Forget the grand offices, the big fees {"\n"}and the false smiles. Meet the honest {"\n"}people with real talent who want to do {"\n"}the right thing for your business.
          </div>
          
          <div className="reasons">
            <h4>THREE GOOD REASONS TO CHOOSE US!</h4>
            <div className="reason-example">
              <div className="reason-info">
                  <img src={OneSvg} alt=""/>
                  <div>
                  <h5>REAL COST SAVINGS</h5>
                  <p>Our virtual model keeps overheads super low, so
                  our fees are typically at least 30% lower than a
                  traditional agency's. <Link to="/services">Read about our services</Link>
                  </p></div>
                </div>
            </div>
            <div className="reason-example">
              <div className="reason-info">
                <img src={TwoSvg} alt=""/>
                <div>
                <h5>REAL VALUE</h5>
                  <p>When you commission threesixty you're buying
                  our expertise and creative talent, nothing else! <Link to="/about">Read more about us.</Link>
                  </p></div>
                </div>
            </div>
            <div className="reason-example" id="reason-example-last">
              <div className="reason-info">
                <img src={ThreeSvg} alt=""/>
                <div>
                <h5>REAL DEAL</h5>
                  <p>And with a wide pool of top international talent
                  you always get the best talent for the job not just
                  whoever an agency has in their employ at the time. <Link to="/experience">Read about experience.</Link>
                  </p></div>
               </div>   
          </div>
            </div>
            

          <div className="WorkExample">
            <div id="examplesTitle">
              WORK EXAMPLES
            </div>
            <Gallery />
          </div>

          <div className="LastInfo">
            <p>
            Our collective is made up of world-class
            creatives who are all at the top of their game,
            having all honed their skills at the very best
            design and advertising agencies in the world.
            </p>
            <p>
              This means we can always build a team of
              A-players that fits your business, rather
              than asking you to fit ours.
            </p>
            <p id="emphasizeText">
              It's like having a tailor made agency for every brief.
            </p>
            <p>
              We are a virtual full-service creative agency
              that's the real deal.
            </p>
            <div className="creatives">
            <Link to="/quote"><p className="firstPart">CREATIVES</p><p className="secondPart">JOIN THE COMMUNITY</p></Link>
            </div>
             </div>
      
          
        </div>
        )
    }



}