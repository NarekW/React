import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles(2)/Page(2)_element_(2)_Style.css';
import Magnetic  from '../img(2)/identify.png';
import Convert  from '../img(2)/engage.png';
import Cart  from '../img(2)/measure.png';

function Homepage_3() {
    return(
     <div className='Homepge-3-2'>
     <div className='row-block'>
     <div className='col_8' id='inf'>
     <h3>Make B2B marketing moves no one can ignore</h3>
     
     <p>With the RollWorks Account-Based Platform, ambitious B2B marketers can choreograph high-performing campaigns.</p>
     <p class="cta-link"><a href="what-you-can-do">Find out what you can do with RollWorks &gt;</a></p>
    </div>
    <div id='DTG-landing' className='SL_swap row-block wrapper text-center elements'>
        <a href='#' className='col_4'>
            <img src={Magnetic}/>
            <h3>Identification</h3>
            <p>Measure the effectiveness of your B2B<br/>
             and ABM programs.</p>
        </a>
        <a href='#' className='col_4'>
            <img src={Convert}/>
            <h3>Engagement</h3>
            <p>Measure the effectiveness of your B2B<br/>
             and ABM programs.</p>
        </a>
        <a href='#' className='col_4'>
            <img src={Cart}/>
            <h3>Measurement</h3>
            <p>Measure the effectiveness of your B2B<br/>
             and ABM programs.</p>
        </a>
    </div>
    </div>
    </div>
    )
    
}
export default Homepage_3;