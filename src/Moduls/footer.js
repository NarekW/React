import React from "react";
import '../css/footer.css';
import Divos from '../img/borderimg.png';
import group from '../img/adroll-group-logo-2x.png';




class Foter extends React.Component{

    handleClick(){
    }
    constructor(){
        super();
        this.state = {
            border: '2px solid #fff',
           
            background: '#C41FAC',
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
            
        
            border: '2px solid #C41FAC',
            textcolor:{
            color:'#3E3E3E'
        }
        })        //        transition: all .65s ease-out;
      }
      onMouseLeave(){
          this.setState({ 
            
            background: '#D61B90',
            backgroundPosition: 'none',
            backgroundSize: 'none',
            transition: 'none',
            border:'2px solid #fff',
            textcolor:{
                    color:'#fff'
            }
          })
      }

    render()
    {
        return(
            <footer>
                <div class='footer-nav'>
                <div class='containerlol'>
                <div id='footer nav bottom' class='row-block'>
                <ul class='footer-flex-container'>

                <li class='footer-block'>
                <a class='lenks'>Why Adroll</a>
                <ul>
                <li><a href="/why-adroll">Overview</a></li>
                <li><a href="/why-adroll">API</a></li>
                <li><a href="/why-adroll">Whats New</a></li>
                <li><a href="/why-adroll">Pricing</a></li>

                </ul>
                </li>

                <li class='footer-block'>
                <a class='lenks'>What you can do</a>
                <ul>
                <li><a href="/why-adroll">Overview</a></li>
                <li><a href="/why-adroll">Attract more website visitors</a></li>
                <li><a href="/why-adroll">Convert visitors intro customers</a></li>
                <li><a href="/why-adroll">Measure marketing impact</a></li>

                </ul>
                </li>

                <li class='footer-block'>
                <a  href="/why-adroll" class='lenks'>Partners</a>
                <ul>
                <li><a href="/why-adroll">Agencies</a></li>
                <li><a href="/why-adroll">Intergrations</a></li>
                <li><a href="/why-adroll">Platform as a Service</a></li>
                </ul>
                </li>

                <li class='footer-block'>
                <a>Lean More</a>
                <ul>
                <li><a href="/why-adroll">AdRoll Blog</a></li>
                <li><a href="/why-adroll">Resources</a></li>
                <li><a href="/why-adroll">Help Center</a></li>
  
                </ul>
                </li>
 
                <li class='footer-block'>
                <a>Company</a>
                <ul>
                <li><a href="/why-adroll">About</a></li>
                <li><a href="/why-adroll">Events</a></li>
                <li><a href="/why-adroll">New</a></li>
                <li><a href="/why-adroll">Careers</a></li>
                <li><a href="/why-adroll">AdRoll Group Engineering</a></li>
               
                </ul>
                </li>

                </ul>
                </div>


<div class="footer-social">
            <ul>
              <li>
                <a href="https://www.facebook.com/adroll" target="_blank"><i class="fab fa-facebook"></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/showcase/adroll" target="_blank"><i class="fab fa-linkedin"></i></a>
              </li>
              <li>
                <a href="https://www.instagram.com/adroll" target="_blank"><i class="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="https://twitter.com/AdRoll" target="_blank"><i class="fab fa-twitter"></i></a>
              </li>
            </ul>
          </div>

                </div>
               <div id='footer-sub' className='SL_swap'>
               <div class='container'>
               <ul className='footer-flex-container'>
               <li class='footer sub-logo adroll-group'>
               <a href="https://www.adrollgroup.com" target="_blank"><img id='groupimg' src={group}/></a>
               </li>
               <li>
                   <ul id='ender'>
                   <li><a href="https://www.adrollgroup.com/careers" target="_blank">Careers</a></li>
                   <li><a href="https://www.adrollgroup.com/careers" target="_blank">Trust Center</a></li>
                   <li><a href="https://www.adrollgroup.com/careers" target="_blank">Terms of Service</a></li>
                   <li><a href="https://www.adrollgroup.com/careers" target="_blank">Privacy Notice</a></li>
                   <li><a href="https://www.adrollgroup.com/careers" target="_blank">Infringement Policy</a></li>
                   <li><a href="https://www.adrollgroup.com/careers" target="_blank">Adjust Ad Preferences</a></li>
                </ul>
                   
                </li>
               </ul>
               <p>© 2006<script>new Date().getFullYear()>2006&&document.write("-"+new Date().getFullYear());</script>-2019, AdRoll, Inc. All rights reserved. AdRoll is a division of AdRoll Group. To learn more please visit <a href="https://www.adrollgroup.com" target="_blank">adrollgroup.com</a>.</p>
               </div>
               </div>
                </div>

            </footer>
        );
    }
}
export default Foter;