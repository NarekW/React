import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles(2)/Page(2)_element_(7)_Style.css';

import Termometr from '../img(2)/pagerduty.png';
import pantheon_bw from '../img(2)/pantheon_bw-1.png';
import transpay from '../img(2)/transpay.png'; 
import wpengine from '../img(2)/wpengine.png';
import orcle from '../img(2)/oracle-dynn.png';
import ibm from '../img(2)/ibm.png';



function Homepage_6() {
    return(
    
     <div className='Homepge-6-jan-2-7'>
     <section >
                
     <div class="container wrapper">
        <div class="row-block">
            <div class="col_12 text-center">
                <h2>Ambitious B2B companies trust RollWorks</h2>
            </div>
        </div>
       <div className='cotmg'>
        <div className='col_8'>
          <img src={Termometr}/>
          </div>
          <div className='col_8'>
          <img src={pantheon_bw}/>
          </div>
          <div className='col_8'>
          <img src={transpay}/>
          </div>
          <div className='col_8'>
          <img src={wpengine}/>
          </div>
          <div className='col_8'>
          <img src={ibm}/>
          </div>
          <div className='col_8'>
          <img src={orcle}/>
          </div>
          </div>
          


    </div>
    </section>
    </div>
    )
    
}
export default Homepage_6;