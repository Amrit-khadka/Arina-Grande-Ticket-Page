import React, { Component } from 'react';
import { Element } from 'react-scroll';

import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/banner-slider/index';
import VenueInfo from './components/venueInfo/index';
import Hilight from './components/hilight/index';
import Pricing from './components/pricing';
import Location from './components/Location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" >

        <Header/>

        <Element name ="featured">
             <Featured />
        </Element>

        <Element name = "venue">
          <VenueInfo />
        </Element>

        <Element name="hilights">
          <Hilight />
        </Element>
        
        <Element name="Pricing">
          <Pricing />
        </Element>
        
        <Element name="location">
          <Location />
        </Element>
       
        <Footer />
      </div>
    );
  }
}

export default App;
