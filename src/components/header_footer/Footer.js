import React from 'react';

import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <div className="bck_red">

        <div className ="pricing_item">
        <div className = "pricing_inner_wrapper">

            <Fade delay={350}>
                <div className="font_righteous footer_logo_venue">The Venue</div>
                
                <div className="footer_copyright">
                    The venue 2018.All rights served.
                </div>
            </Fade>

        </div>
        </div>


        </div>
    );
};

export default Footer;