import React from 'react';
import '../css/HeaderStyle.css';




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
            <div>    
                
                <ul class="Spisoks Mini" id="jan">
                        <li class="afterspisok"> <a class ="aflinkspis" href="asdasd">Home</a>
                        </li>
                 </ul>  
                 <ul class="Spisoks Mini">
                        <li class="afterspisok"> <a class ="aflinkspis" href="asdasd">Why Adroll?</a>
                        </li>
                 </ul>     
                 <ul class="Spisoks " id="max">
                        <li class="afterspisok" id="elm_1"> <a class ="aflinkspis" href="asdasd">What You can do?</a>
                                <ul class ='Limon' id="LimonElm_1">
                                        <li><a href="sadsa">Attract more website visitors</a></li>
                                        <li><a href="sadsa">Convert visitors into customers</a></li>
                                        <li><a href="sadsa">Measure marketing impact</a></li>
                                      
                                    </ul>
                        </li>
                 </ul>  
                 <ul class="Spisoks Mini">
                        <li class="afterspisok" > <a class ="aflinkspis" href="asdasd">Pricing</a>
                        </li>
                 </ul> 
                 <ul class="Spisoks " id="max">
                        <li class="afterspisok" id = 'elm_2'> <a class ="aflinkspis" href="asdasd">Partners</a>
                                <ul class ='Limon' id="LimonElm_2">
                                        <li><a href="sadsa">Agencies</a></li>
                                        <li><a href="sadsa">Intergrations</a></li>
                                        <li><a href="sadsa">Platform as a Service</a></li>
                                      
                                    </ul>
                        </li>
                 </ul> 
   
                </div>  
               </div>             
        )
    }
}

export default Header;