import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles(2)/Page(2)_element_(6)_Style.css';

import Termometr from '../img(2)/home-platform.png';
import oracle  from '../img(2)/oracle-dynn.png';

function Homepage_6() {
    return(
    
     <div className='Homepge-6-jan-2'>
     <section >
                
     <div class="col_12 text-center pull-quote">

<h1>“We’re thrilled with how RollWorks performs. As far<br/> as an investment it’s a no-brainer. We consistently<br/>
 <a className='borderlink' href="https://www.rollworks.com/resources/case-studies/dyn">see a positive ROI both in revenue and in leads</a>.”</h1>

  <p>—John Wright, Digital Optimization Manager <img src={oracle} alt="oracle + dyn"/></p>
  <p class="cta-link"> <a href="https://www.rollworks.com/resources/case-studies/dyn">Read the full story &gt; </a></p>
  </div>
    </section>
    </div>
    )
    
}
export default Homepage_6;