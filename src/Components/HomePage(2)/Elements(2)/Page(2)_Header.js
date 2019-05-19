//
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
//
import '../Styles(2)/Page(2)_Header_Style.css';
import Adroll_Header_Logo from '../img(2)/adroll-logo-2x.png';
import Adroll_Heade_off from '../img(2)/adroll-logo-grayscale-2x.png';
import RollWorks_Header_Logo from '../img(2)/rollworks-logo-2x.png';
import RollWorks_Off_image from '../img(2)/rollworks-logo-grayscale-2x.png';
import USA_Flag_Image from '../img(2)/au.png';

function Header() {
  return (
    <header>
    <div>
    <nav id='site-switcher-2'>
        <div className='Logos-Div'>
            <ul>
              
                <li id='Adroll_Off_Logo_li_2'><a className='logslinks' href="/Home" ><img src={Adroll_Heade_off} alt='adroll' /></a></li>
                <li id='Adroll_On_Logo_li_2'><a  className='logslinks' href="#readmore" ><img src={Adroll_Header_Logo} alt='adroll' /></a></li>
                <li id='RollWorks_On_Image_li_2'><a className='logslinks' href="#readmore"><img src={RollWorks_Header_Logo} alt='RollWorlks' /></a></li>
                <li id='RollWorks_Off_Image_li_2'><a  className='logslinks' href="RollWorlks"><img src={RollWorks_Off_image} alt='RollWorlks' /></a></li>
            </ul>
        </div>
        <div className='nav-picker-icon-2'>
          <div className='lang-contaniner'>
             
                </div>
            
        </div>
        
    </nav>
    <nav id='desktop-nav'>
    <div className='menu-container'>
      <ul className='nav-content-2'>
      <li><a href="#readmore">Home</a></li>
      <li><a href="#readmore">Why RollWorks?</a></li>
      <li><a  className='menu-lists-links'  href="#readmore">What you can do <i className="fa fa-chevron-down" aria-hidden="true"></i></a>
      <ul>
              <li><a href="#readmore">Attract more website visitors</a></li>
              <li><a href="#readmore">Convert visitors intro customers</a></li>
              <li><a href="#readmore">Measure marketing <br/> impact</a></li>
            </ul>
      </li>

       
      <li><a  className='menu-lists-links'  href="#readmore">Resources <i className="fa fa-chevron-down" aria-hidden="true"></i></a>
      <ul>
              <li><a href="#readmore">Customer Stories</a></li>
              <li><a href="#readmore">Resources</a></li>
              <li><a href="#readmore">AdRoll Blog</a></li>
              <li><a href="#readmore">Developer API</a></li>
              <li><a href="#readmore">Help Center</a></li>
 
            </ul>
      </li>
    </ul>   
    </div>
    <div className='nav-login-icon-2'>
      <ul>
        <li>
          <a id='login-link' href="#readmore">Login</a>
          </li>
          <li id="signup-nav">
          <a class="cta fill-green" href="/request-a-demo">Request a demo<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
    </nav>
    </div>
    </header>
    
  );
}

export default Header;
