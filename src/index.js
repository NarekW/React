import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './Moduls/Header.js';
import Main from './Moduls/Main.js';
import SelTwo from './Moduls/HomepageTwo.js'
import Hem3 from './Moduls/Homepage3.js'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Hem3 />,document.querySelector('#home3'));
ReactDOM.render(<SelTwo />,document.querySelector('#narek'));
ReactDOM.render(<Header />,document.querySelector('#root'));
ReactDOM.render(<Main />,document.querySelector('#main'));



serviceWorker.unregister();


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






var Lemonsds = document.querySelectorAll('.Limon');
Lemonsds.forEach(function(element){

    element.style.visibility = "hidden";
});


function onMouseMove1(){
    var List1 = document.querySelector('#LimonElm_1');
    List1.style.visibility = "visible";
};
function mouseOut1(){
    var List1 = document.querySelector('#LimonElm_1');
    List1.style.visibility = "hidden";
}
var block1 = document.querySelector('#what');
block1.addEventListener('mousemove', onMouseMove1);
block1.addEventListener('mouseout', mouseOut1);
/*********************** */

function onMouseMove2(){
    var List2 = document.querySelector('#part ul');
    List2.style.visibility = "visible";
};
function mouseOut2(){
    var List2 = document.querySelector('#part ul');
    List2.style.visibility = "hidden";
}
var block2 = document.querySelector('#part');
block2.addEventListener('mousemove', onMouseMove2);
block2.addEventListener('mouseout', mouseOut2);
/*********************** */

/*********************** */

function onMouseMove3(){
    var List3 = document.querySelector('#max ul');
    List3.style.visibility = "visible";
};
function mouseOut3(){
    var List3 = document.querySelector('#max ul');
    List3.style.visibility = "hidden";
}
var block3 = document.querySelector('#max');
block3.addEventListener('mousemove', onMouseMove3);
block3.addEventListener('mouseout', mouseOut3);


/*********************** */
var kokos = document.querySelectorAll('.Limon li');
kokos.forEach(function(element){

    element.addEventListener('mouseover', function(){
        element.style.backgroundColor ='#E5E9F2';
    });
    element.addEventListener('mouseout', function(){
        element.style.backgroundColor ='#fff';
    });
});