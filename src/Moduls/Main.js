import React from "react";
import '../css/SuperStyle.css';
import hero from '../img/qyal.png'
import male from '../img/male.png' 
import MensWorld from '../img/menworld.png'
import logo from '../img/qyal.png';



class Main extends React.Component{

    handleClick(){
        
        function Male(){
            var Men = document.querySelector('#heroes');
            Men.src=male;
            Men.style.height='500px';
            Men.style.position = "relative"
            Men.style.top='30px';
            Men.style.right='70px';
    
            var sutypos = document.querySelector('#info');
            console.log(sutypos)
            sutypos.style.position = "relative"
            sutypos.style.bottom='450px';

            var Herotext = document.querySelector('#info h4');
            Herotext.textContent = 'Hannah Kenndey Bofm ';
    
            var Buttons = document.querySelectorAll('.buttons');
            Buttons.forEach(function(element) {
                console.log(element);
                element.style.position = "relative"
                element.style.bottom='450px';
    
              });
              return 
        };
        function MeWorld(){
            var Men = document.querySelector('#heroes');
            Men.src=MensWorld;
            Men.style.height='500px';
            Men.style.position = "relative"
            Men.style.top='30px';
            Men.style.right='20px';
    
            var sutypos = document.querySelector('#info');
            console.log(sutypos)
            sutypos.style.position = "relative"
            sutypos.style.bottom='450px';

            var Herotext = document.querySelector('#info h4');
            Herotext.textContent = 'Rich Krolikowski Sunski ';
    
            var Buttons = document.querySelectorAll('.buttons');
            Buttons.forEach(function(element) {
                console.log(element);
                element.style.position = "relative"
                element.style.bottom='450px';
    
              });
              return 
        };
        function Adam(){
            var Boss = document.querySelector('#heroes');
            Boss.src=logo;
            Boss.style.height='500px';
            Boss.style.position = "relative"
            Boss.style.top='10px';
            Boss.style.right='20px';
    
            var sutypos = document.querySelector('#info');
            console.log(sutypos)
            sutypos.style.position = "relative"
            sutypos.style.bottom='480px';

            var Herotext = document.querySelector('#info h4');
            Herotext.textContent = 'Adam Lasky TeePublic ';

    
            var Buttons = document.querySelectorAll('.buttons');
            Buttons.forEach(function(element) {
                console.log(element);
                element.style.position = "relative"
                element.style.bottom='450px';
    
              });
              return 
        };

        var  array_of_functions = [function() {MeWorld()},function() {Male()},function() {Adam()}];
        var rand = Math.floor(Math.random() * array_of_functions.length);
        array_of_functions[rand]();
        
        
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
            <div>
            <section>
                
                <div id="OblojkaDiv">
                    
                    <div id="Shapee1">
                    </div>
                    <div id="Shapee2">
                    </div>
                    <div id="SuperHero"><img id='heroes' src={hero}/>
                    <div id="info">
                    <a href="sadasd">
                    <h4>Adam Lasky<br />
                    TeePublic</h4> 
                    
                    <span><p>Doubled revenue over<br /> 
                   <a id='bottext'>the holiday season.</a></p></span>
                    <p id="read">READ CASE STUDY <i class="fas fa-angle-right"></i></p>
                    </a>
   
                    </div>
                    <button className="buttons" id="bt1" onClick={this.handleClick.bind(this)}></button>
                    <button className="buttons" id="bt2" onClick={this.handleClick.bind(this)}></button>
                    </div>
                    <div id="Infomer">
                        <h1>Grow your business.
                            <p>Boost your sales.</p></h1>
                        <span><p id='attract'>Attract and convert visitors to your online store with display ads, social, email, and now video ads.</p></span>
                        <div id="getbutton"  onMouseEnter={() => this.onMouseEnter()}  onMouseLeave={() => this.onMouseLeave()}  style={this.state}>
                            <a style={this.state.textcolor}>GET STARTED <i class="fas fa-angle-right"></i></a>
                            
                        </div>
                        <div id='dec'>
                        </div>

                    </div>

                </div>
                
            </section>

            </div>
        );
    }
}
export default Main;