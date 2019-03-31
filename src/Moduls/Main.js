import React from "react";
import '../css/SuperStyle.css';
import hero from '../img/men1.png'



class Main extends React.Component{


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
                    <div id="SuperHero"><img src={hero}/>
                    <div id="info">
                    <a href="sadasd">
                    <h4>Adam Lasky<br />
                    TeePublic</h4> 
                    
                    <span><p>Doubled revenue over<br /> 
                   <a id='bottext'>the holiday season.</a></p></span>
                    <p id="read">READ CASE STUDY <i class="fas fa-angle-right"></i></p>
                    </a>
   
                    </div>
                    <button className="buttons" id="bt1"></button>
                    <button className="buttons" id="bt2"></button>
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