import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Homepage-3Css.css';
import Magnetic  from '../img/icon-magnet.svg';
import Convert  from '../img/icon-cart.svg';
import Cart  from '../img/icon-bulb.svg';

function Homepage_3() {
    return(
     <div className='row-block'>
     <div className='col_8' id='inf'>
     <h3>Dare to Grow with AdRoll</h3>
     <hr class="align-center gradient-teal-purple"></hr>
     <p>Unlock unprecedented growth with display ads, social, behavioral email, and<br /> 
     actionable insights—all in one platform. Marketers from around the world have built<br />  
     both their businesses and careers with the AdRoll Growth Platform.</p>
    </div>
    <div id='DTG-landing' className='SL_swap row-block wrapper text-center elements'>
        <a href='#' className='col_4'>
            <img src={Magnetic}/>
            <p className='titlos'>ATTRACT</p>
            <p class="subs">Find more of the right shoppers<br />
             with ad campaigns that span<br />
            across top sites, social, emails,<br />and beyond.</p>
        </a>
        <a href='#' className='col_4'>
            <img src={Convert}/>
            <p className='titlos'>CONVERT</p>
            <p class="subs">Find more of the right shoppers<br />
             with ad campaigns that span<br />
            across top sites, social, emails,<br />and beyond.</p>
        </a>
        <a href='#' className='col_4'>
            <img src={Cart}/>
            <p className='titlos'>MEASURE</p>
            <p class="subs">Find more of the right shoppers<br />
             with ad campaigns that span<br />
            across top sites, social, emails,<br />and beyond.</p>
        </a>
    </div>
    
    </div>
    )
    
}
export default Homepage_3;