import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './Moduls/Header.js';
import Main from './Moduls/Main.js';
import * as serviceWorker from './serviceWorker';

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





ElementForeach('#elm_1', 'mousemove',function(){
    var LemonS = document.querySelector('#LimonElm_1');
    LemonS.style.display='block';
    
    LemonS.addEventListener('mouseout', function(){
    LemonS.style.display='none';
});

    
});

var Lemonsds = document.querySelectorAll('.Limon');
Lemonsds.forEach(function(element){

    element.style.display='none';
});
/*********************** */


ElementForeach('#elm_2', 'mousemove',function(){
    var LemosanS = document.querySelector('#LimonElm_2');
    LemosanS.style.display='block';

    
});


var Lemdonsd = document.querySelector('#LimonElm_2');
Lemdonsd.addEventListener('mouseout', function(){
    Lemdonsd.style.display='none';
});
/************** */
ElementForeach('#elm_3', 'mousemove',function(){
    var LemonS = document.querySelector('#LimonElm_3');
    LemonS.style.display='block';

    
});


var Lemdons = document.querySelector('#LimonElm_3');
Lemdons.addEventListener('mouseout', function(){
    Lemdons.style.display='none';
});

var kokos = document.querySelectorAll('.Limon li');
kokos.forEach(function(element){

    element.addEventListener('mouseover', function(){
        element.style.backgroundColor ='#E5E9F2';
    });
    element.addEventListener('mouseout', function(){
        element.style.backgroundColor ='#fff';
    });
});

