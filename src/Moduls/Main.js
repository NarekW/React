import React from "react";
import '../css/SuperStyle.css';




class Main extends React.Component{

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
            <div>
            <section>
            </section>

            </div>
        );
    }
}
export default Main;