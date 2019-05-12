import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Homepage-8Css.css';

import '../Styles/SlickStyles/Slick_Ads/myslick.css';

import Divos from '../img/borderimg.png';


//***slick */

import Slider from "react-slick";

export class SimpleSliderAds extends React.Component {
  render() {
    const settings = {
      dots: true,
      autoplay:true,
      infinite: true,
      speed: 500,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
  
        <Slider {...settings}>
          <div>
          <h3>AdRoll has been such an important part of our<br />
           growth story. My first ever campaign took place<br />
          on Black Friday and delivered 27x ROI. To this day,<br/>
          it still blows my mind.</h3>
          <div class="quote-author">
            <div class="text-center">
           

              <h3>Nav Salimian</h3>
              <p>Head of Marketing</p>
              <b>Claudio Lugli Shirts</b>
            </div>
          </div>
          </div>
          <div>
          <h3>AdRoll has been such an important part of our<br />
           growth story. My first ever campaign took place<br />
          on Black Friday and delivered 27x ROI. To this day,<br/>
          it still blows my mind.</h3>
          <div class="quote-author">
            <div class="text-center">
           

              <h3>Nav Salimian</h3>
              <p>Head of Marketing</p>
              <b>Claudio Lugli Shirts</b>
            </div>
          </div>
          </div>
          <div>
          <h3>AdRoll has been such an important part of our<br />
           growth story. My first ever campaign took place<br />
          on Black Friday and delivered 27x ROI. To this day,<br/>
          it still blows my mind.</h3>
          <div class="quote-author">
            <div class="text-center">
           

              <h3>Nav Salimian</h3>
              <p>Head of Marketing</p>
              <b>Claudio Lugli Shirts</b>
            </div>
          </div>
          </div>
 
        </Slider>
      </div>
    );
  }
}
function Homepage_8() {
    return(
    
      <section>
      <div>
       <div>

           <img id='megadivImg'  src={Divos}/>
       </div>
       <SimpleSliderAds />
       </div>

   </section>
    )
    
}
export default Homepage_8;