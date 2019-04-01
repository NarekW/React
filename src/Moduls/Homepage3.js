import React from 'react';
import ReactDOM from 'react-dom';
import kekek from '../img/hahahaha.png';
import men from '../img/ululuku.png';
import nk from '../img/mek.png';
import nk1 from '../img/ura.png';
import nk2 from '../img/border.png';
import jan from '../img/getem.png';
import jano from '../img/group.png';
import '../css/hem3.css';

class Hem3 extends React.Component {
    render() {
        return(
            <section>
                <div>
                <img src={kekek}/>
                </div>
                <div className='koko' >
                <img src={men}/>
                </div>
                <div className='koko2' >
                <img src={nk}/>
                </div>
                <div className='koko3' >
                <img src={nk1}/>
                </div>
                <div className='koko4' >
                <img src={nk2}/>
                </div>
                <div className='koko5' >
                <img src={jan}/>
                </div>
                <div>
                <footer>
                <div class="fotterContainer">
            <div>
                <ul class="hr">
                        <li class="after"> <span class ="aflink">Why AdRoII</span>
                                <ul>
                                        <li><a href="sadsa">Overview</a></li>
                                        <li><a href="sadsa">API</a></li>
                                        <li><a href="sadsa">Whats New</a></li>
                                        <li><a href="sadsa">Pricing</a></li>
                                    </ul>
                        </li>
                       </ul>

                       <ul class="hr">
                            <li class="after"> <span class ="aflink">What you can do</span>
                                    <ul>
                                            <li><a href="sadsa">Overview</a></li>
                                            <li><a href="sadsa">Attract more website visitors</a></li>
                                            <li><a href="sadsa">Convert visitors into customers</a></li>
                                            <li><a href="sadsa">Measure marketing impact</a></li>
                                        </ul>
                            </li>
                           </ul>
                           <ul class="hr">
                                <li class="after"> <span class ="aflink">Partners</span>
                                        <ul>
                                                <li><a href="sadsa">Agencies</a></li>
                                                <li><a href="sadsa">integrations</a></li>
                                                <li><a href="sadsa">Platform as a Service</a></li>
                                          
                                            </ul>
                                </li>
                               </ul>
                               <ul class="hr">
                                    <li class="after"><span class ="aflink">Lean More</span>
                                            <ul>
                                                    <li><a href="sadsa">AdRoll Blog</a></li>
                                                    <li><a href="sadsa"> Resources</a></li>
                                                    <li><a href="sadsa">Help Center</a></li>
                                                    
                                                </ul>
                                    </li>
                                   </ul>
                                   <ul class="hr">
                                        <li class="after"><span class ="aflink">Company</span>
                                                <ul>
                                                        <li><a href="sadsa">About</a></li>
                                                        <li><a href="sadsa">News</a></li>
                                                        <li><a href="sadsa">Careers</a></li>
                                                        <li><a href="sadsa">AdRoll Group Blog</a></li>
                                                        
                                                    </ul>
                                        </li>
                                        
                                       </ul>
                                       <ul class="hr social">
                                                <li>
                                                <a href='sdsdsd'><i class="fab fa-facebook-square"></i> </a>
                                                <a href='sdsdsd'><i class="fab fa-linkedin"></i></a>
                                                <a href='sdsdsd'><i class="fab fa-instagram"></i> </a>
                                                <a href='sdsdsd'><i class="fab fa-twitter"></i></a>
                                                <br/>
                                                
                                                </li>
                                           </ul>     
                                      
                                </div>

                                <div id='com'>
            
                                                <ul>       
                                                        <li  id='ayo' class="after"><img  src={jano}/></li>
                                                        <li class="after"><span class ="dsa">Careers</span></li>
                                                        <li class="after"><span class ="dsa">Trust Center</span></li>
                                                        <li class="after"><span class ="dsa">Terms of Service</span></li>
                                                        <li class="after"><span class ="dsa">Privacy Notice</span></li>
                                                        <li class="after"><span class ="dsa">Infringement Policy</span></li>
                                                        <li class="after"><span class ="dsa">Adjust Ad Preferences</span></li>
                                                        <p id='end'>© 2006<script>new Date().getFullYear()>2006&&document.write("-"+new Date().getFullYear());</script>-2019, AdRoll, Inc. All rights reserved. AdRoll is a division of AdRoll Group. To learn more please visit <a href="https://www.adrollgroup.com" target="_blank">adrollgroup.com</a>.</p>
                                                        
                                                </ul>
                                    
                                </div> 
                        </div> 
                        
        </footer>
                </div>
                
            </section>
        );
    }
}
export default Hem3;