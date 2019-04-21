import React from "react";
import '../css/ChorordStyle.css';
import Heraxos from '../img/automation.png';




class Chorord extends React.Component{

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
            <section>
                <div class='containeros-wraper'>
                <div className='heraxodivs'>
                    <img id='heraxos' src={Heraxos}/>
                    <div class="note text-center">*Actual AdRoll Customer</div>
                </div>
                <div class='col_4 uran'>
                <h3 class='mytes'>Personalization<br/>
                You Can Count On</h3>
                <hr class="hr2"></hr>
                <p>Better understand shopper behavior,<br/>
                 make the perfect recommendation, and<br/>
                  grow sales with our artificial<br/>
                intelligence and core technology.</p>
                </div>
                </div>
            </section>
        );
    }
}
export default Chorord;