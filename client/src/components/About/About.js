import React from 'react';

import './About.css';


export default class About extends React.Component{


    render(){
        return(
            <div className="About">
                <style>
                    @import url("https://use.typekit.net/scf5hzg.css");
                </style>
            
            <div className="firstAbout">
                <div id="firstsentence">
                    DON'T GET {"\n"}STUCK PAYING {"\n"}FOR BIG OVERHEADS{"\n"}WHEN WHAT YOU NEED{"\n"}IS JUST{"\n"}BIG IDEAS.
                </div>
                <div className="spacer"/>
                <div id="secondsentence">
                    The world has changed, is your {"\n"}business changing with it?
                </div>
            </div>
            <div className="firstInfo">
                <p>Unlike traditional agencies we don't create solutions based on available in-house resources and available
                the overheads that go along with it. We resource a solution that works perfectly for you, and different
                for each project.</p>
                <p>This is value-based pricing not overhead-based pricing so you always get the value you pay for and at
                    much lower rates.
                </p>
                <p>With collaboration built into our DNA we can scale the right resources up or down to meet your
                    needs at no cost to you, with regular access to senior level talent.
                </p>
            </div>

            <div className="secondInfo">
                <p>
                    At traditional agencies you get whatever resource is available with
                    <b> threesixty</b> you get what resources are right!
                    Why not try it and see the difference for yourself?
                </p>
            </div>
            </div>
        )
    }
}