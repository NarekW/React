import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles(1)/Homepage-7Css.css';

import Nastroika from '../img(1)/integrations.png';

function Homepage_7() {
    return(
      <div className='Homepge-7'>
      <section>
      <div class='containeros-wraper' id='cone-conter'>
      <div className='my_nastroika_image'>
          <img id='heraxos' className='nastroika' src={Nastroika}/>
         
      </div>
      <div class='col_4 uran' id='my_con_text'>
      <h3 class='mytes'>Personalization<br/>
      You Can Count On</h3>
      <hr class='white-on-left' id='hr2'></hr>
      <p>Better understand shopper behavior,<br/>
       make the perfect recommendation, and<br/>
        grow sales with our artificial<br/>
      intelligence and core technology.</p>
      </div>
      </div>
  </section>
  </div>
    )
    
}
export default Homepage_7;