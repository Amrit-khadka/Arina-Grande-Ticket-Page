import React from 'react';
import Carousel from './Slider';
import TimeUntil from './TimeUntil';


const Featured = () => {
    return (
        <div style = {{ position : 'relative'}}>
            
            <Carousel />
            <TimeUntil/>

            <div className="artist_name">
                <div className ="wrapper">
                    Ariana Grande
                </div>
            </div>

            
        </div>
    );
};

export default Featured;