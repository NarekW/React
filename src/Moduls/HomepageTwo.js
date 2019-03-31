import React from 'react';
import ReactDOM from 'react-dom';
import attract from '../img/attract.png';
import convert from '../img/convert.png';
import measure from '../img/measure.png';
import '../css/Homepage2.css';


class SelTwo extends React.Component {
    render() {
      return(
        <section>
        <div id='main2'>
            <h3 id='Dare'>Dare to Grow with AdRoll</h3>
            <hr class="align-center gradient-teal-purple"></hr>
            <p id='texts'>Unlock unprecedented growth with display ads, social, behavioral email, and actionable<br/> 
            insights—all in one platform. Marketers from around the world have built both their<br/>
            businesses and careers with the AdRoll Growth Platform.</p>
            <div  id='DTG-landing' class="SL_swap row-table wrapper text-center elements">
            <ul className='may'>
            <a class='col_4' href='sad'>
            <img src={attract} />
            <p class='title'>ATTRACT</p>
            <p class="subs">Find more of the right shoppers<br/> 
            with ad campaigns that span<br/>
            across top sites, social, emails, and <br/>beyond.
            </p>
            </a>
            </ul>
            <ul className='may'>
            <a class='col_4' href='sad'>
            <span id='comverimg'><img  src={convert} /></span>
            <p class='title'>CONVERT</p>
            <p class="subs">Reconnect with shoppers you<br/>
             know and guide them back to your<br/> site to complete their purchases.
            </p>
            </a>
            </ul>
            <ul className='may'>
            <a class='col_4' href='sad'>
            <span id='measureimg'><img src={measure} /></span>
            <p class='title' id='mstext'>MEASURE</p>
            <p class="subs">Advertise smarter by measuring<br/> 
            the impact that your campaigns<br/>
            have on a shopper’s decision to<br/>
            buy.
            </p>
            </a>
            </ul>


        </div>
        </div>

        </section> 
      );
    }
  }
  export default SelTwo;