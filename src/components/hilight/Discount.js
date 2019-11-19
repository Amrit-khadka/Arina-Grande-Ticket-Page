import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart : 0,
        discountEnd : 33,
    }

    percentageCount = () => {

        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart : this.state.discountStart + 1,
            })
        }
    }


    

    componentDidUpdate(){
        setTimeout(() => {
            this.percentageCount()
        },22)
    }
    
    render() {
        return (
            <div className="center_wrapper">

                <div className="discount_wrapper">

                    <Fade onReveal={() => this.percentageCount()}>

                        <div className="discount_porcentage">

                            <span>{this.state.discountStart}%</span>
                            <span>off</span>

                        </div>

                    </Fade>

                    <Slide right> 
                        
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th June</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text </p>
                            
                            <MyButton
                                text="Purchase Ticket"
                                bck ="#ffa800"
                                color ="#ffffff"
                                link ="http://www.google.com" 
                            />
                        </div>

                    </Slide>



                </div>

            </div>
        );
    }
}

export default Discount;