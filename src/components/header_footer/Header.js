import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SideDrawer from './SideDrawer';


class Header extends Component {

    state ={
        drawerOpen : false,
        showBgColor : false,
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen : value,
           
        })
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);

    }

    handleScroll= () => {
        // console.log('user scrolling')
        if(window.scrollY > 0){
            this.setState({
                showBgColor : true
            })
        }
        else{
            this.setState({
                showBgColor : false
            })

        }
    }

    render() {
        return (
            <div>
              
              <AppBar positon ="fixed" 
                      style = {{ backgroundColor : this.state.showBgColor ? '#2f2f2f': 'transparent', // default showng transparent
                                 boxShadow : 'none',
                                 padding : '10px 0'
                              }}
              >
               
               <Toolbar>
                   
                   <div className="header_logo">
                        <div className="font_righteous header_logo_venue">The Venue</div>
                        <div className="header_logo_title">Musical Events</div>
                   </div>

                    <IconButton
                        arial-label="Menu"
                        color="inherit"
                        onClick={(value) => this.toggleDrawer(value)}

                    >
                    <MenuIcon/>
                    </IconButton>

                    <SideDrawer 
                        open={this.state.drawerOpen}
                        onClose={(value)=>this.toggleDrawer(value)}
                    />
                    
               </Toolbar>

              </AppBar> 

             


            </div>
        );
    }
}

export default Header;