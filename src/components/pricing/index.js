import React, { Component } from 'react';

import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices: [250, 500, 600],
        positions: ['Balcony', 'Medium', 'Star'],
        descriptions: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer',
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s ',
            'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker'
        ],

        linkTo: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
        delay: [350, 0, 350]
    }


    // showBoxes = () => {
    //     return(
    //         <div>
    //             hello..it's boxes
    //         </div>
    //     )
    // }

    showBoxes = () => (
        this.state.prices.map((item, index) => (

            <Zoom  delay = {this.state.delay[index]}>

                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">

                        <div className="pricing_title">
                            <span>${this.state.prices[index]}</span>
                            <span>{this.state.positions[index]}</span>
                        </div>

                        <div className="pricing_description">
                            <span>{this.state.descriptions[index]}</span>
                        </div>

                        <MyButton
                            text='Pricing button'
                            bck='#f1f800'
                            color='#ffff'
                            link={this.state.linkTo[index]}
                        />

                    </div>
                </div>

            </Zoom>


        ))

    )
    render() {
        return (
            <div className="bck_black">

                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>

            </div>
        );
    }
}

export default Pricing;