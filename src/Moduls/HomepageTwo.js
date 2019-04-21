import React from 'react';
import ReactDOM from 'react-dom';

import Magnetic  from '../img/icon-magnet.svg';
import '../css/Homepage2.css';


class SelTwo extends React.Component {
    render() {
      return(
        <section class='homepage'>
        <div class='containermy'>
        <div className='row block'>
        <div className='mycol_10'>
          <h3>Dare to Growe wifth Adroll</h3>
          <hr class='align-center gradient-teal-purple'/>
          <p id='texter'>Unlock unprecedented growth with display ads, social, behavioral email, and <br/>
            actionable insights—all in one platform. Marketers from around the world have built<br/>
            both their businesses and careers with the AdRoll Growth Platform.</p>
          
          </div>
        </div>
          </div>
          <div id='DTG-landing' class='SL_swap row-block wrapper text-center elements'>
          <a href='#' class='col_4'>
          <img src={Magnetic} class='col_4'/>
          <p>Attract</p>
          <p className='subs'>
          Find more of the right shoppers<br/>
          with ad campaigns that span<br/>
          across top sites, social, emails,<br/>
          and beyond.<br/>
          </p>
          </a>
          <a href='#' class='col_4'>
          <img src={Magnetic} class='col_4'/>
          <p>Attract</p>
          <p className='subs'>
          Find more of the right shoppers<br/>
          with ad campaigns that span<br/>
          across top sites, social, emails,<br/>
          and beyond.<br/>
          </p>
          </a>
          <a href='#' class='col_4'>
          <img src={Magnetic} class='col_4'/>
          <p>Attract</p>
          <p className='subs'>
          Find more of the right shoppers<br/>
          with ad campaigns that span<br/>
          across top sites, social, emails,<br/>
          and beyond.<br/>
          </p>
          </a>


            </div>
        </section> 
      );
    }
  }
  export default SelTwo;