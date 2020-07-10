import React from 'react';

import './Services.css';
import CircleSvg from '../Images/Logos/ikona.svg';

export default class Services extends React.Component{

    render(){
        return(
            <div className="Services">
                <style>
                    @import url("https://use.typekit.net/scf5hzg.css");
                </style>
            
                <div className="firstServices">
                    <div id="firstsentence">
                        AS THE NAME SAYS {"\n"}
                        OUR COMBINED EXPERIENCE IS{"\n"}COMPLETELY 360 DEGREES.{"\n"}FULL SERVICE.
                    </div>
                    <div id="secondsentence">
                        We cover every creative discipline{"\n"}as well as writing, content,{"\n"}strategic planning, UI/UX and{"\n"}event events!
                    </div>
                <div className="service-type">
                    <div id="type"><img src={CircleSvg} alt=""/>ADVERTISING &amp; MARKETING</div>
                    <div id="type"><img src={CircleSvg} alt=""/>DIGITAL &amp; WEB</div>
                    <div id="type"><img src={CircleSvg} alt=""/>BRAND DESIGN</div>
                    <div id="type"><img src={CircleSvg} alt=""/>PACKAGIN DESIGN</div>
                    <div id="type"><img src={CircleSvg} alt=""/>SOCIAL MEDIA MARKETING</div>
                    <div id="type"><img src={CircleSvg} alt=""/>AUDIO VISUAL &amp; FILM</div>
                    <div id="type"><img src={CircleSvg} alt=""/>EVENTS</div>
                    <div id="type"><img src={CircleSvg} alt=""/>POS &amp; RETAIL MARKETING</div>
                    <div id="type"><img src={CircleSvg} alt=""/>DIRECT MARKETING</div>
                </div>
                </div>
                <div className="Information">
                    <p>More than that you will be accessing some of the best, most seasoned talent in all these
                        areas from around the world!
                    </p>
                    <p>
                        Most traditional agencies could never affor to carry top talent in all these disciplines but
                        with the virutal it's no problem at all, which means another problem for you removed!
                    </p>
                </div>
            </div>
        )
    }
}