import React, { Component } from 'react';
import logo from './img/as.png';
import logo2 from './img/rollworks-logo.jpg'

import './css/App.css';



var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            border: '2px solid #fff',
            background: 'linear-gradient(45deg, #00d4c3, #5077DE);',
            textcolor:{
                color:'#fff'
        }
           
        }
        
    };
    onMouseEnter() 
    {        
            this.setState({
               
                background: 'linear-gradient(45deg, #7627DE, #169BDE)',
            textcolor:{
                color:'#3E3E3E'
        }
        })        //        transition: all .65s ease-out;
      }
      onMouseLeave(){
          this.setState({ 
            
            background: 'linear-gradient(45deg, #00d4c3, #5077DE);',
            textcolor:{
                    color:'#fff'
            }
          })
      }

    render(){
        
        return(
            
            <div id="HeaderDiv">        
                <ul id="HeaderUl">
                    <li className="HeaderLi" id="logo1Li">
                        <a>
                            <img src={logo}/>
                        </a>
                    </li>
                    <li className="HeaderLi">
                        <a id="logo2">
                            <img src={logo2}/>
                        </a>
                   </li>
                </ul> 
   
                    <div id="Blocks">
                    <ul className="TextUl">                                        
                        <li className="textLi">
                            <a href="dsasd" id="what" class="blocktext">Whay you can do</a> 
                            <ul>
                                <li className="Spisoktext"><a href="dsasd">Attract more website visitors</a></li>
                                <li className="Spisoktext"><a href="dsasd">Convert visitors into customers</a></li>
                                <li className="Spisoktext"><a href="dsasd">Measure marketing impact</a></li>
                            </ul>    
                        </li>  
                     
                    </ul>  
                    <ul class="ObichniBlock">
                        <li class="Obichnilis">
                            <a href="dsasd" class="blocktext">Home</a>
                        </li>
                    </ul>

                    <ul class="lolka">
                        <li class="Obichnilis">
                            <a href="dsasd" class="blocktext">Why AdRoll?</a>
                        </li>
                    </ul>

                    <ul class="TextUl2">
                        <li class="Obichnilis">
                            <a href="dsasd" class="blocktext">Pricing</a>
                        </li>
                    </ul>
                    <ul className="partnersul">                                        
                        <li className="textLi2">
                            <a href="dsasd" id="what" class="blocktext">Partners</a> 
                            <ul>
                                <li className="Spisoktext2"><a href="dsasd">Agencies</a></li>
                                <li className="Spisoktext2"><a href="dsasd">Integrations</a></li>
                                <li className="Spisoktext2"><a href="dsasd">Platform as a Service</a></li>
                            </ul>    
                        </li>  
                     
                    </ul>


                    <ul className="Leanmore">                                        
                        <li className="textLi3">
                            <a href="dsasd" id="what2" class="blocktext">Learn More</a> 
                            <ul>
                                <li className="Spisoktext3"><a href="dsasd">Customer Stories</a></li>
                                <li className="Spisoktext3"><a href="dsasd">Resources</a></li>
                                <li className="Spisoktext3"><a href="dsasd">AdRoll Blog</a></li>
                                <li className="Spisoktext3"><a href="dsasd">Developer API</a></li>
                                <li className="Spisoktext3"><a href="dsasd">Help Center</a></li>
                            </ul>    
                        </li>  
                     
                    </ul>
                    <ul id="knopkaUl">
                        <li id="leginlink"><a href="sdasdas">Login</a></li>
                        <li id="getstLi"  onMouseEnter={() => this.onMouseEnter()}  onMouseLeave={() => this.onMouseLeave()}  style={this.state}>
                        <a>GET STARTED</a></li>
                       </ul> 
 
    
         

               
                </div>
            </div>
            
                    
         
                
        )
    }
}

export default Header;