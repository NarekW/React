import React from 'react';
import '../css/HeaderStyle.css';


import AdrollLogo from '../img/adroll-logo-2x.png';
import AdrollLogoOn from '../img/adroll-logo-grayscale-2x.png'
import RollWorksOff from '../img/rollworks-logo-grayscale-2x.png';
import RollWorksOn from '../img/rollworks-logo-2x.png';
import USAFlag from '../img/au.png';

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
<div>      
<nav id="site-switcher">
    <div class="nav-logo icon-1">
      <ul id='logs'>
        <li id='adrolbg'>
        <a href="https://www.rollworks.com">
        <img src={AdrollLogo} alt='addrol'/>
        </a>
        </li>
        <li id='offadroll'>
            <a href="/" class="current">
            <img src={AdrollLogoOn} alt="AdRoll"/>
            </a>
            </li>
        <li id='offrolworks'>
          <a href="https://www.rollworks.com">
          <img src={RollWorksOff} alt='rollworks'/>
          </a>
        </li>
        <li id='onrollworks'>
            <a href="https://www.rollworks.com">
          <img class="nav-hover-img-rw" src={RollWorksOn} alt='rollworks'/>
          </a>
          </li>
      </ul>
    </div>
        <div id='lang'>
        <ul id='flags'>
            <li id='titlelang'><a id='tlink'><img src={USAFlag}/>USA</a>
            <ul id='langul'>
            <li id='bugged'><a><img src={USAFlag}/>USA</a></li>
            <li><a><img src={USAFlag}/>USA</a></li>
            <li><a><img src={USAFlag}/>USA</a></li>
            <li><a><img src={USAFlag}/>USA</a></li>
            <li><a><img src={USAFlag}/>USA</a></li>
            <li><a><img src={USAFlag}/>USA</a></li>
            <li><a><img src={USAFlag}/>USA</a></li>
                </ul>
            </li>
        </ul>
        
    </div>
  </nav>
  <nav id='desktop-nav'>
  <div>
          <ul class='menu'>
              <li><a href='#' class='lnks'>Home</a></li>
              <li><a href='#' class='lnks'>Why AdRoll?</a>
              </li>
              <li class='show_0'><a class='lnks' href='#'>What you can do <i class="fas fa-angle-down"></i></a>
              <ul class='wtfuis' id='ules_0'>
                      <li>
                        <a href='#'>
                      Attract more website <br/>visitors
                      </a>
                      </li>
                      <li>
                      <a href='#'>
                      Сonvert visitors intro<br/>customers
                      </a>
                      </li>
                      <li>
                      <a href='#'>
                     Measure marketing <br/>impact
                      </a>
                      </li>

                    </ul>
              </li>
              <li><a href='#' class='lnks' >Pricing</a></li>
              <li class= 'show_1'><a href='#' class='lnks'>Partners <i class="fas fa-angle-down"></i></a>
              <ul class='wtfuis' id='ules_1'>
                      <li>
                      <a href='#'>
                      Agencies
                      </a>
                      </li>
                      <li>
                      <a href='#'>
                      Integrations
                      </a>
                      </li>
                      <li>
                      <a href='#'>
                      Platform as a Service
                      </a>
                      </li>

                    </ul>
              </li>
              <li class='show_2'><a class='lnks' href='#'>Lean More<i class="fas fa-angle-down"></i></a>
              <ul class='wtfuis' id='ules_2'>
                      <li>
                      <a href='#'>
                      Customer Stories
                      </a>
                      </li>
                      <li>
                      <a href='#'>
                      Resources
                      </a>
                      </li>
                      <li>
                      <a href='#'>
                      AdRoll Blog
                      </a>
                      </li>
                      <li>
                      <a href='#'>
                      Developer API
                      </a>
                      </li>
                      <li>
                      <a href='#'>
                      Help Center
                      </a>
                      </li>
                    </ul>
              </li>
            </ul>

            <ul class='Logins'>
            <li><a class='lnks'href='#'>Login</a></li>
            <li class='gradient'><a class='uper' href='#'>GET STARTED<i class="fas fa-arrow-right"></i></a></li>
            </ul>
    </div>
    </nav>
  </div>
        )
    }
}

export default Header;