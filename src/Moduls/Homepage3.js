import React from 'react';
import ReactDOM from 'react-dom';
import '../css/hem3.css';
import Richi from '../img/rich-sunski.png';
import Adam from '../img/adam-teepublic.png';
import Hannah from '../img/hannah-boomf.png';
class Hem3 extends React.Component {
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
            cursor: 'pointer',
            
        
            
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
    render() {
        return(
            <section>
            <div id='ContainerMemes'>
            <div class="col_8 wrapper-tall-hero">
            <h1>Grow your business.<br/>Boost your sales.</h1>
            <p>Attract and convert visitors to your online store with display<br/> ads, social, email, and now video ads.</p>
            <div class='animate' style={this.state}onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}>
                <a href='#' style={this.state.textcolor}>GET STARTED <i class="fas fa-angle-right"></i></a>
            </div>
            </div>
            <div class='col_9'>
            <div id='buttos'>
            <button class='mybt'><i class="fas fa-angle-left"></i></button>
            <button class='mybt'><i class="fas fa-angle-left"></i></button>
            </div>
            <div class="info">
            <h4 id='titlos' >Rich Krolikowski</h4>
			      <p id='fale'><b>Sunski</b></p>
                    <p>Doubled ROI as a one-<br/>man marketing team.</p>
			      <p class="secondary-cta">Read Case Study <i class="fas fa-angle-right"></i></p>
          </div>
            <div id='heroes container'>
           
                <img src={Richi} id="slide_show1" />
                <img src={Adam} id="slide_show2" class='nero'/> 
                
            </div>
                
            </div>
            </div>

            </section>
        );
    }
}
/*<img src={Hannah}id="slide_show3"/>*/
export default Hem3;