import React from 'react';
import '../css/HeaderStyle.css';
import logo from '../img/logotest1.png';
import usafg from '../img/usa.png'
import logo2 from '../img/adtext2.png'




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
            <div class='logsContainer'> 
                <ul id='logos'>
                    <li id='bro1'><a href='sdasd'><img src= {logo}/></a></li>
                    <li id='bro2'><a href='sdasd'><img src= {logo2}/></a></li>
                    <li id='laguages'>
                    <img src={usafg} />
                    <a>USA</a>
                    </li>
                </ul>
             </div>   
            <div id="lists">    
                
                <ul class="Spisoks Mini" id="jan">
                        <li class="afterspisok"> <a class ="aflinkspis" href="asdasd">Home</a>
                        </li>
                 </ul>  
                 <ul class="Spisoks Mini" id="why">
                        <li class="afterspisok"> <a class ="aflinkspis" href="asdasd">Why Adroll?</a>
                        </li>
                 </ul>   
              
                 <ul class="Spisoks " id="what">
                        <li class="afterspisok" id="elm_1"> <a class ="aflinkspis kuku" href="asdasd">What You can do? <i class="fas fa-chevron-down"></i></a>
                                <ul class ='Limon' id="LimonElm_1">
                                        <li><a href="sadsa">Attract more website <br/>visitors</a></li>
                                        <li><a href="sadsa">Convert visitors into<br/> customers</a></li>
                                        <li><a href="sadsa">Measure marketing<br/> impact</a></li>
                                      
                                    </ul>
                        </li>
                 </ul>  
              
                 <ul class="Spisoks Mini" id="price">
                        <li class="afterspisok" > <a class ="aflinkspis" href="asdasd">Pricing</a>
                        </li>
                 </ul> 
                 <ul class="Spisoks " id="part" >
                        <li class="afterspisok" id = 'elm_2'> <a class ="aflinkspis kuku" href="asdasd">Partners<i class="fas fa-chevron-down"></i></a>
                                <ul class ='Limon' id="LimonElm_2">
                                        <li><a href="sadsa">Agencies</a></li>
                                        <li><a href="sadsa">Intergrations</a></li>
                                        <li><a href="sadsa">Platform as a Service</a></li>
                                      
                                    </ul>
                        </li>
                 </ul> 
                 <ul class="Spisoks " id="max">
                        <li class="afterspisok" id = 'elm_3'> <a class ="aflinkspis kuku" href="asdasd">Lean More <i class="fas fa-chevron-down"></i></a>
                                <ul class ='Limon' id="LimonElm_3" >
                                        <li><a href="sadsa">Customer Stories</a></li>
                                        <li><a href="sadsa">Resources</a></li>
                                        <li><a href="sadsa">AdRoll Blog</a></li>
                                        <li><a href="sadsa">Developler API</a></li>
                                        <li><a href="sadsa">Help Center</a></li>
                                      
                                    </ul>
                        </li>
                 </ul>
                    <ul ID='starter'>
                    <li id='logintext'><a href='sdasadsad'>Login</a></li>
                    <li id='getstart'><a href='SDSDSD'>GET STARTED <i class="fas fa-arrow-right"></i></a></li>
                    </ul>
                </div>  
               </div>             
        )
    }
}

export default Header;