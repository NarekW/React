import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './App';
import Main from './Moduls/Main.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />,document.querySelector('#root'));
ReactDOM.render(<Main />,document.querySelector('#main'));

var GetButton = document.querySelector('#getbutton');

var Iftext = 'asdsadsad';
console.log(Iftext[2]);


//=============nav3lis====
//var Nav3Lis = document.querySelectorAll('.nav3Lis');



function ElementForeach(ElementName,EventName,Myfunction){

    console.log(Myfunction);
    console.log(typeof EventName=== 'function');
    /*if(Myfunction === undefined && Myfunction === undefined){
        console.log('chkaaaaaaaaaaaaaaa')
    }{
        console.log('chkaaaaaaaaaaaaaaa')
    }*/

    if (typeof Myfunction === "function") 
    {
        if(ElementName[0] ==='.'){
    
            var SeactElement = document.querySelectorAll(ElementName);
            SeactElement.forEach(function(element){
    
                element.addEventListener(EventName, Myfunction);
            });
        }
        else if(ElementName[0] === '#')
        {
            var SeactElement = document.querySelector(ElementName);
            SeactElement.addEventListener(EventName, Myfunction);
        }
        
    }
    else if( Myfunction === undefined &&  typeof EventName === 'function'){
          
        function narek(myelement){
        var SeactElement = document.querySelectorAll(ElementName);
        SeactElement.forEach(function(element){
                
        });
    }
    }
        
};
//---------------------------------------------------------------------
function OnMouseLeave(){
          
    var SeactElement = document.querySelectorAll('.Spisoktext');
    SeactElement.forEach(function(element){

        element.style.display = 'none'; 
         
  
    })
}

function OnMouseOver(){

    var SeactElement = document.querySelectorAll('.Spisoktext');
    SeactElement.forEach(function(element){

        element.style.display = 'block';
        Mouseoverelement.addEventListener('mouseleave', OnMouseLeave);
    });
}    

ElementForeach('.nav3Lis','mouseover',function(){
    this.style.backgroundColor='red';
});

ElementForeach('.Spisoktext','mouseover', function(){
    this.style.backgroundColor = '#F4F6F9';
});

ElementForeach('.Spisoktext','mouseleave', function(){
    this.style.backgroundColor = '#fff';
});

var SeactElement = document.querySelectorAll('.Spisoktext');
SeactElement.forEach(function(element){

    element.style.display = 'none';
});

var Mouseoverelement = document.querySelector('.textLi');
Mouseoverelement.addEventListener('mouseover', OnMouseOver);
//----------------


//-----------------------------------2----------------------------------
function OnMouseLeave2(){
          
    var SeactElement2 = document.querySelectorAll('.Spisoktext2');
    SeactElement2.forEach(function(element){

        element.style.display = 'none'; 
         
  
    })
}
function OnMouseOver2(){

    var SeactElement22 = document.querySelectorAll('.Spisoktext2');
    SeactElement22.forEach(function(element){

        element.style.display = 'block';
        Mouseoverelement45.addEventListener('mouseout', OnMouseLeave2);
    });
}    

ElementForeach('.Spisoktext2','mouseover', function(){
    this.style.backgroundColor = '#F4F6F9';
});

ElementForeach('.Spisoktext2','mouseleave', function(){
    this.style.backgroundColor = '#fff';
});

var SeactElement80 = document.querySelectorAll('.Spisoktext2');
SeactElement80.forEach(function(element){

    element.style.display = 'none';
});

var Mouseoverelement45 = document.querySelector('.textLi2');
Mouseoverelement45.addEventListener('mouseover', OnMouseOver2);
//---------------- 


//-----------------------------------3----------------------------------
function OnMouseLeave3(){
          
    var SeactElement123 = document.querySelectorAll('.Spisoktext3');
    SeactElement123.forEach(function(element){

        element.style.display = 'none'; 
         
  
    })
}
function OnMouseOver3(){

    var SeactElement33 = document.querySelectorAll('.Spisoktext3');
    SeactElement33.forEach(function(element){

        element.style.display = 'block';
        Mouseoverelement3333.addEventListener('mouseleave', OnMouseLeave3);
    });
}    

ElementForeach('.Spisoktext3','mouseover', function(){
    this.style.backgroundColor = '#F4F6F9';
});

ElementForeach('.Spisoktext3','mouseleave', function(){
    this.style.backgroundColor = '#fff';
});

var SeactElement333 = document.querySelectorAll('.Spisoktext3');
SeactElement333.forEach(function(element){

    element.style.display = 'none';
});

var Mouseoverelement3333 = document.querySelector('.textLi3');
Mouseoverelement3333.addEventListener('mouseover', OnMouseOver3);
//---------------- 
 

serviceWorker.unregister();


