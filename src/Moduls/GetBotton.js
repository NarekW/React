import React from "react";
import '../css/GetBotton.css';
import Divos from '../img/borderimg.png';




class GetButton extends React.Component{

    handleClick(){
    }
    constructor(){
        super();
        this.state = {
            border: '2px solid #fff',
           
            background: 'none',
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
            
        
            border: 'none',
            textcolor:{
            color:'#3E3E3E'
        }
        })        //        transition: all .65s ease-out;
      }
      onMouseLeave(){
          this.setState({ 
            
            background: 'none',
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
            <section>
               <div>
                <div id='getbutdiv'>
                <div class="containerjan wrapper-tall row-block text-center">
    <h2>Start growing with AdRoll today</h2>
    <p>Our customers average 5x return on ad spend. Don’t miss out.</p>

            <div id="footer-CTA" class="btn-animate-outer">
            <div class='animate' id='downbutget' style={this.state}onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}>
                <a href='#' style={this.state.textcolor}>GET STARTED <i class="fas fa-angle-right"></i></a>
            </div>
            </div>
        </div>
                </div>
                </div>

            </section>
        );
    }
}
export default GetButton;