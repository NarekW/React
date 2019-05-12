import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles/Homepage-5Css.css';
import Heraxos from '../img/automation.png';


function Homepage_5() {
    return(
    
        <section>
        <div class='containeros-wraper'>
        <div className='heraxodivs'>
            <img id='heraxos' src={Heraxos}/>
            <div class="note text-center">*Actual AdRoll Customer</div>
        </div>
        <div class='col_4 uran'>
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
    )
    
}
export default Homepage_5;