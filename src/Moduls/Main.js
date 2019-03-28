import React from "react";
import '../css/SuperStyle.css';



class Main extends React.Component{


    constructor(){
        super();
        this.state = {
            border: '2px solid #fff',
           
            background: '#D61B90',
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
        
            border: '2px solid #BC1FB7',
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
            <section>
                
                <div id="OblojkaDiv">
                
                    <div id="Shapee1">
                    </div>
                    <div id="Shapee2">
                    </div>
                    <div id="SuperHero">
                    <div id="info">
                    <a href="sadasd">
                    <h4>Adam Lasky<br />TeePublic</h4> 
                    
                    <p>Doubled revenue over<br /> 
                    the holiday season.</p>
                    <p id="read">READ CASE STUDY</p>
                    </a>
   
                    </div>
                    <button className="buttons" id="bt1"></button>
                    <button className="buttons" id="bt2"></button>
                    </div>
                    <div id="Infomer">
                        <h1>Grow your business.
                            <p>Boost your sales.</p></h1>
                        <p>Attract and convert visitors to your online store with display ads, social, email, and now video ads.</p>
                        <div id="getbutton"  onMouseEnter={() => this.onMouseEnter()}  onMouseLeave={() => this.onMouseLeave()}  style={this.state}>
                            <a style={this.state.textcolor}>GET STARTED</a>
                        </div>

                    </div>

                </div>
                
            </section>
            
        );
    }
}
export default Main;