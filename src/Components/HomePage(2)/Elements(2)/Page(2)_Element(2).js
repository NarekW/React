import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles(2)/Page(2)_element_(2)_Style.css';
import Magnetic  from '../img(2)/measure.png';
import Convert  from '../img(2)/measure.png';
import Cart  from '../img(2)/measure.png';

function Homepage_3() {
    return(
     <div className='Homepge-3'>
     <div className='row-block'>
     <div className='col_8' id='inf'>
     <h3>Make B2B marketing moves no one can ignore</h3>
     
     <p>With the RollWorks Account-Based Platform, ambitious B2B marketers can choreograph high-performing campaigns.</p>
     <p class="cta-link"><a href="what-you-can-do">Find out what you can do with RollWorks &gt;</a></p>
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
    </div>
    )
    
}
export default Homepage_3;