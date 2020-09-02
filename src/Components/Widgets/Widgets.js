import React from 'react';

import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <div 
                style={{ width: "340px", height: "100px", marginLeft: "-10px"}}
                className="fb-page" 
                data-href="https://www.facebook.com/Akatsuki.Region/"   
                data-tabs="timeline" 
                data-width="340" 
                data-height="600" 
                data-small-header="false" 
                data-adapt-container-width="true" 
                data-hide-cover="false" 
                data-show-facepile="true"
            >
                <blockquote 
                    cite="https://www.facebook.com/Akatsuki.Region/" 
                    className="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/Akatsuki.Region/">
                Akatsuki.
                </a>
            </blockquote></div>
        </div>
    )
}

export default Widgets