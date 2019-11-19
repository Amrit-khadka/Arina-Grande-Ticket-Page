import React from 'react';

const Location = () => {
    return (
        <div className ="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151986.7373800998!2d-2.3635453430686!3d53.47216354499292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C+UK!5e0!3m2!1sen!2smm!4v1548738782375" 
                width="100%" 
                height="450" 
                frameBorder="0" 
               
                allowFullScreen>
            </iframe>

            <div className ="location_tag">
               <div>Location </div> 
            </div>
        </div>
    );
};

export default Location;