import React from 'react';
import ReactDOM from 'react-dom';
import kekek from '../img/hahahaha.png';
import men from '../img/ululuku.png';
import yoyo from '../img/yoyo.png';
import nk from '../img/mek.png';
import nk1 from '../img/ura.png';
import nk2 from '../img/border.png';
import jan from '../img/getem.png';
import jano from '../img/group.png';
import '../css/hem3.css';

class Hem3 extends React.Component {
    constructor(){
        super();
        this.state = {
            border: '2px solid #fff',
           
            background: '#8341F9',
            textcolor:{
                color:'#fff'
        }
           
        }
        
    };
    onMouseEnter() 
    {        
            this.setState({
              
            background: 'linear-gradient(45deg, #e9fb75, #b3f8a7, #57F5F7, transparent, 50%, transparent 100%)',
            backgroundPosition: 'right bottom',
            backgroundSize: '100% 1400%',
            transition: 'all .65s ease-out',
            
        
            border: '2px solid #fff',
            textcolor:{
            color:'#3E3E3E'
        }
        })        //        transition: all .65s ease-out;
      }
      onMouseLeave(){
          this.setState({ 
            
            background: '#8341F9',
            backgroundPosition: 'none',
            backgroundSize: 'none',
            transition: 'none',
            border:'2px solid #fff',
            textcolor:{
                    color:'#fff'
            }
          })
      }
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

                <div id='texto'>
                <marquee scrollamount='10'>
                <span>
                <a>
                <h3>I saw a noticeable increase in sales. I know now<br/> 
                that the bulk of my budget needs to go into<br/>
                advertising on Instagram. Without AdRoll, I<br/>
                wouldn't have had the data to see that.</h3>
        

                <h3>Doug Ratner</h3>
                <p>CEO and Founder</p>
                <b>I’d Rather Be With My Dog</b>
                </a>

                <a>
                <h3>I saw a noticeable increase in sales. I know now<br/> 
                that the bulk of my budget needs to go into<br/>
                advertising on Instagram. Without AdRoll, I<br/>
                wouldn't have had the data to see that.</h3>
        

                <h3>Doug Ratner</h3>
                <p>CEO and Founder</p>
                <b>I’d Rather Be With My Dog</b>
                </a>
                <a>
                <h3>I saw a noticeable increase in sales. I know now<br/> 
                that the bulk of my budget needs to go into<br/>
                advertising on Instagram. Without AdRoll, I<br/>
                wouldn't have had the data to see that.</h3>
        

                <h3>Doug Ratner</h3>
                <p>CEO and Founder</p>
                <b>I’d Rather Be With My Dog</b>
                </a>
                </span>
                </marquee>
                
                </div>
                </div>

                <div className='koko5' >
                <div id='mybottom'  onMouseEnter={() => this.onMouseEnter()}  onMouseLeave={() => this.onMouseLeave()}  style={this.state}>
                <a style={this.state.textcolor}>GET STARTED <i class="fas fa-angle-right"></i></a>
                </div>
                <img src={jan}/>
                </div>
                <div>
                <footer>
                <div class="fotterContainer">
            <div>
                <ul class="hr">
                        <li class="after"> <span className="aflink">Why AdRoII</span>
                                <ul>
                                        <li><a href="sadsa">Overview</a></li>
                                        <li><a href="sadsa">API</a></li>
                                        <li><a href="sadsa">Whats New</a></li>
                                        <li><a href="sadsa">Pricing</a></li>
                                    </ul>
                        </li>
                       </ul>

                       <ul class="hr">
                            <li class="after"> <span className="aflink">What you can do</span>
                                    <ul>
                                            <li><a href="sadsa">Overview</a></li>
                                            <li><a href="sadsa">Attract more website visitors</a></li>
                                            <li><a href="sadsa">Convert visitors into customers</a></li>
                                            <li><a href="sadsa">Measure marketing impact</a></li>
                                        </ul>
                            </li>
                           </ul>
                           <ul class="hr">
                                <li class="after"> <span className="aflink">Partners</span>
                                        <ul>
                                                <li><a href="sadsa">Agencies</a></li>
                                                <li><a href="sadsa">integrations</a></li>
                                                <li><a href="sadsa">Platform as a Service</a></li>
                                          
                                            </ul>
                                </li>
                               </ul>
                               <ul class="hr">
                                    <li class="after"><span className="aflink">Lean More</span>
                                            <ul>
                                                    <li><a href="sadsa">AdRoll Blog</a></li>
                                                    <li><a href="sadsa"> Resources</a></li>
                                                    <li><a href="sadsa">Help Center</a></li>
                                                    
                                                </ul>
                                    </li>
                                   </ul>
                                   <ul class="hr">
                                        <li class="after"><span className="aflink">Company</span>
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
                                                        <li class="after"><span className="dsa">Careers</span></li>
                                                        <li class="after"><span className="dsa">Trust Center</span></li>
                                                        <li class="after"><span className="dsa">Terms of Service</span></li>
                                                        <li class="after"><span className="dsa">Privacy Notice</span></li>
                                                        <li class="after"><span className="dsa">Infringement Policy</span></li>
                                                        <li class="after"><span className="dsa">Adjust Ad Preferences</span></li>
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