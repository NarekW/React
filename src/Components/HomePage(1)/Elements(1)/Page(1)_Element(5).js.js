import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles(1)/Homepage-6Css.css';

import Termometr from '../img(1)/insights.png';

function Homepage_6() {
    return(
    
     <div className='Homepge-6'>
     <section >
                
    <div class="col_4 wrapper wrapper-tall-top text-left" >
      <h3 class='text3'>Insights That<br />Lead to Revenue</h3>
      <hr class="white-on-left"/>
      <p id="textso" class='text3'>Adjust and learn from every aspect of your<br />
       campaigns. We’ve built an arsenal of<br />
        attribution tools that sees our customers<br />
         make $246 billion worth of sales every<br />
          year.</p>
    </div>
    <div class="col_8 text-right" id='clone_8'>
      <img src={Termometr}/>
    </div>
    </section>
    </div>
    )
    
}
export default Homepage_6;