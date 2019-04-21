import React from "react";
import '../css/SuperStyle.css';
import LogoPeorple from '../img/logo-people.png';




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
        
            <section >
            <div className=' homepage-2 bkgd-purple-gradient'>
            <div className='container row-table'>
            <div className='col_4 wrapper wrapper-tall-top text-left'>
            <h3>Everywhere Your
                <br/>
                Customers Are
                </h3>
                <hr className='white-on-left'/>
                <p id='textso'>
                Go everywhere your shoppers live, work,<br/>
                 and play in one campaign. AdRoll gets you<br/>
                  all over Google, Facebook, CNN, and<br/>
                   millions of other places.
                </p>
            </div>
            </div>
            <div class=' logos-container'>
            
            <div class='logos-scrolling'>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>

            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            
            <div className='logo'>
            <img src={LogoPeorple}/>
            
            </div>
            
            
            </div>
            </div>
            </div>

            </section>

      
        );
    }
}
export default Main;