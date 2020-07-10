import React from 'react';

import './Experience.css';


export default class Experience extends React.Component{

    render(){
        return(
            <div className="Experience">
                <style>
                    @import url("https://use.typekit.net/scf5hzg.css");
                </style>
            
            <div className="firstExp">
                <div className="firstsentence">
                    PROVEN EXPERTISE
                </div>
                <div className="secondsentence">
                    Our international experts {"\n"}have a broad range
                    of proven experience across multiple{"\n"}
                    industries and sectors.
                </div>
                <div className="experience-examples">
                    <div id="xp">TRAVEL &amp; TOURISM</div>
                    <div id="xp">BANKING &amp; FINANCE</div>
                    <div id="xp">RETAIL &amp; TRADING</div>
                    <div id="xp">FOOD &amp; BEVERAGE</div>
                    <div id="xp">GOVERNMENTAL</div>
                    <div id="xp">OIL &amp; GAS</div>
                    <div id="xp">TELECOMMUNICATIONS</div>
                    <div id="xp">MEDICAL</div>
                    <div id="xp">INDUSTRY &amp; EXPORTS</div>
                    <div id="xp">SPORTS &amp; ENTERTAINMENT</div>
                </div>
                
            </div>
            <div className="lastInfo">
                    <p>As a virtual team of creative talent we are growing all the time so even if we don't cover your
                       sector with relevant experience right now we can always add a top resource who knows it well
                       at no cost to you.
                    </p>
                    <p>
                        This is the real benefit of <b>threesixty</b> aside from the cost saving, and that is always getting the
                        best talent for the job not just whoever an agency has in their employ at the time.
                    </p>
                    <p id="slogan">
                        Let us know what you are in need of and see the difference for yourself!
                    </p>
                </div>
            </div>
        )
    }
}