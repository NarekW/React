import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Homepage-2Css.css';
import "../Styles/SlickStyles/slick.css";

import Richi from '../img/rich-sunski.png';
import Adam from '../img/adam-teepublic.png';
import Hannah from '../img/hannah-boomf.png';



import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      draggable:false,
    
      fade:true,
      autoplay: true,
      autoplaySpeed:5000,
    
      cssEase:'linear'
    };
    return (
      <div>
 
        <Slider {...settings}>
          <div>
            <img src={Adam} />
            <div class='info'>
            <h4> Adam Lasky</h4>
            <p class='family'><b>TeePublic</b></p>
            <p class='opisanie'>Doubled revenue over the holiday season.</p>
            <p class="secondary-cta">Read Case Study <i class="fa fa-arrow-right" aria-hidden="true" vwo-el-id="6071902100"></i> </p>
            </div>
          </div>
          <div>
          <img src={Hannah} />
          <div class='info'>
            <h4>Hannah Kennedy</h4>
            <p class='family'><b>Boomf</b></p>
            <p class='opisanie'>Helped launch two successful businesses.</p>
            <p class="secondary-cta">Read Case Study <i class="fa fa-arrow-right" aria-hidden="true" vwo-el-id="6071902100"></i> </p>
            </div>
          </div>
          <div>
          <img src={Richi} />
          <div class='info'>
            <h4>Rich Kroliwski</h4>
            <p class='family'><b>Sunski</b></p>
            <p class='opisanie'>Doubled ROI as a one- man marketing team</p>
            <p class="secondary-cta">Read Case Study <i class="fa fa-arrow-right" aria-hidden="true" vwo-el-id="6071902100"></i> </p>
            </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}
function Homepage_2() {
    return(
        <section class="homepage homepage-1 bkgd-purple-red-gradient">
        <div class="container row-table" id="homepage-hero">
            <div class="col_8 wrapper-tall-hero">
                <h1>Grow your business.<br />Boost your sales.</h1>
                <p>Attract and convert visitors to your online store with display ads, social, email, and now video ads.</p>
            </div>
            <div class="btn-animate-outer">
        <div class="btn-animate-inner-green">
            <a href="https://app.adroll.com/activate/register/" class="cta btn-animate-text secondary-cta"> Get Started <i class="fa fa-arrow-right" aria-hidden="true" vwo-el-id="6071902100"></i></a>
        </div>
      </div>
        </div>
        <SimpleSlider/>
        </section>

    )
}
export default Homepage_2;