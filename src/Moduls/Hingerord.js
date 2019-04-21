import React from 'react';
import '../css/Hingerord.css';
import Termometr from '../img/insights.png';


class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            border: '2px solid #fff',
            transition: 'all 150ms ease-in-out',
            background: 'linear-gradient(45deg, #0DC5C7, #4582DA)',
            textcolor:{
                color:'#fff'
        }
        }
        
    };
    onMouseEnter() 
    {        
            this.setState({
                background: 'linear-gradient(45deg, #4A7EDC, #8C30F3)',
               
                //letterSpacing: '1px',
                //backgroundSize: '200% auto'
                //background-image: linear-gradient(45deg, #00d4c3, #9327f5);
        })        //        transition: all .65s ease-out;
      }
      onMouseLeave(){
          this.setState({ 
            border: '2px solid #fff',
            
            background: 'linear-gradient(45deg, #0DC5C7, #4582DA)',
            textcolor:{
                color:'#fff'
        }
          })
      }
    render(){
        
        return(
            <section >
            <div className=' homepage-2 bkgd-purple-gradient nkar4'>
            <div className='container row-table'>
            <div className='col_4 wrapper wrapper-tall-top text-left'>
            <h3>Everywhere Your
                <br/>
                Customers Are
                </h3>
                <hr className='white-on-left'/>
                <p id='textso'>
                Go everywhere your shoppers live, work,<br/>
                 and play in one campaign. AdRoll gets you<br/>
                  all over Google, Facebook, CNN, and<br/>
                   millions of other places.
                </p>
            </div>
            </div>
            <div class='col_8 logos-container'>
            <img id='imgter' src={Termometr}/>
            <div class='logos-scrolling'>            
            
            </div>
            </div>
            </div>

            </section>
            )
        }
    }
    
    export default Header;