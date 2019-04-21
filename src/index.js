import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './Moduls/Header.js';
import Main from './Moduls/Main.js';
import SelTwo from './Moduls/HomepageTwo.js'
import Hem3 from './Moduls/Homepage3.js';
import Chorord from './Moduls/Chorord.js';
import Hing from './Moduls/Hingerord.js';
import Vecer from './Moduls/Vecerord.js';
import MegaDiv from './Moduls/MegaDiv.js';
import Foter from './Moduls/footer.js';
import GetBotton from './Moduls/GetBotton.js';
/**********************IMAGES******** */
///////////////////////////////////////////
import * as serviceWorker from './serviceWorker';

import { setTimeout } from 'timers';

ReactDOM.render(<Foter />,document.querySelector('#Foter'));
ReactDOM.render(<GetBotton />,document.querySelector('#GetBotton'));
ReactDOM.render(<Vecer />,document.querySelector('#Vec'));
ReactDOM.render(<MegaDiv />,document.querySelector('#MegaDiv'));
ReactDOM.render(<Chorord />,document.querySelector('#Chorord'));
ReactDOM.render(<Hing />,document.querySelector('#Hing'));
ReactDOM.render(<Hem3 />,document.querySelector('#home3'));
ReactDOM.render(<SelTwo />,document.querySelector('#narek'));
ReactDOM.render(<Header />,document.querySelector('#root'));
ReactDOM.render(<Main />,document.querySelector('#main'));



serviceWorker.unregister();


//****************************************** */
var AdrollLogo = document.querySelector('#offrolworks a');
AdrollLogo.style.zIndex = "100000";
var AdrollLogoOff = document.querySelector('#onrollworks a');
AdrollLogoOff.style.opacity='0';
AdrollLogoOff.style.zIndex = "390000";

AdrollLogoOff.addEventListener('mouseover', function(){
    AdrollLogoOff.style.opacity='1';
    AdrollLogoOff.addEventListener('mouseout', function(){
        AdrollLogoOff.style.opacity='0';
    });
    
});
/********************************************** */
var LanguagesLis = document.querySelector('#langul');
LanguagesLis.style.display='none';

var UlLangs = document.querySelector('#titlelang');

UlLangs.addEventListener('mouseover',function(){
    LanguagesLis.style.display='block';
});

var flagsUL = document.querySelector('#flags');
flagsUL.addEventListener('mouseout', function(){
    LanguagesLis.style.display='none';
})
/*************************/
/***************************** */

var Menu_UL=document.querySelectorAll('.wtfuis');
Menu_UL.forEach(function(element) {
    element.style.visibility = "hidden";
  });

//////////////////////////////////////////////////


var ShowMenu_Li=document.querySelector('.show_0');
ShowMenu_Li.addEventListener('mouseover' ,function(){
  var uls = document.querySelector('#ules_0');
      uls.style.visibility = "visible";
      uls.addEventListener('mouseout',function(){
          uls.style.visibility = "hidden";
      });
      ShowMenu_Li.addEventListener('mouseout' ,function(){
          var uls = document.querySelector('#ules_0');
              uls.style.visibility = "hidden";
      });
});



var ShowMenu_Li1=document.querySelector('.show_1');
ShowMenu_Li1.addEventListener('mouseover' ,function(){
  var uls1 = document.querySelector('#ules_1');
      uls1.style.visibility = "visible";
      uls1.addEventListener('mouseout',function(){
          uls1.style.visibility = "hidden";
      });
      ShowMenu_Li1.addEventListener('mouseout' ,function(){
          var uls1 = document.querySelector('#ules_1');
              uls1.style.visibility = "hidden";
      });
});
var ShowMenu_Li3=document.querySelector('.show_2');
ShowMenu_Li3.addEventListener('mouseover' ,function(){
  var uls3 = document.querySelector('#ules_2');
      uls3.style.visibility = "visible";
      uls3.addEventListener('mouseout',function(){
          uls3.style.visibility = "hidden";
      });
      ShowMenu_Li3.addEventListener('mouseout' ,function(){
          var uls3 = document.querySelector('#ules_2');
              uls3.style.visibility = "hidden";
      });
});
/********************************/
/*function ElementForeach(ElementName,EventName,Myfunction){

  
    console.log(typeof EventName=== 'function');
    /*if(Myfunction === undefined && Myfunction === undefined){
        console.log('chkaaaaaaaaaaaaaaa')
    }{
        console.log('chkaaaaaaaaaaaaaaa')
    }

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
/*********************** 

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

/*********************** 

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


/*********************** 
var kokos = document.querySelectorAll('.Limon li');
kokos.forEach(function(element){

    element.addEventListener('mouseover', function(){
        element.style.backgroundColor ='#E5E9F2';
    });
    element.addEventListener('mouseout', function(){
        element.style.backgroundColor ='#fff';
    });
});
/************************************ */

/*function StartImges()
{
    var  array_of_functions = [function() {MeWorld()},function() {Male()},function() {Adam()}];
    var rand = Math.floor(Math.random() * array_of_functions.length);
    array_of_functions[rand](); 
}

function Male(){
    
    var Men = document.querySelector('#heroes');
    Men.style.opacity=0.45; 
    setTimeout(() => {
        Men.src=male;
        Men.style.opacity=100; 
        Men.style.height='500px';
        Men.style.position = "relative"
        Men.style.top='30px';
        Men.style.right='100px';
    
        var sutypos = document.querySelector('#info');
     
        sutypos.style.position = "relative"
        sutypos.style.bottom='450px';
    
        var Herotext = document.querySelector('#info h4');
        Herotext.textContent = 'Hannah Kenndey Bofm ';
    
        var Buttons = document.querySelectorAll('.buttons');
        Buttons.forEach(function(element) {
      
            element.style.position = "relative"
            element.style.bottom='450px';
    
          }); 
          var MensTimer = setTimeout(MeWorld,7000);
    }, 100);
      return 
};
function MeWorld(){
    var Men = document.querySelector('#heroes');
    Men.style.opacity=0.45; 
    setTimeout(() => {
        Men.src=MensWorld;
        Men.style.opacity=100;
        Men.style.height='500px';
        Men.style.position = "relative"
        Men.style.top='30px';
        Men.style.right='20px';
        Men.style.filter= 'alpha(Opacity=25)';
      
    
        var sutypos = document.querySelector('#info');
    
        sutypos.style.position = "relative"
        sutypos.style.bottom='450px';
    
        var Herotext = document.querySelector('#info h4');
        Herotext.textContent = 'Rich Krolikowski Sunski ';
    
        var Buttons = document.querySelectorAll('.buttons');
        Buttons.forEach(function(element) {
          
            element.style.position = "relative"
            element.style.bottom='450px';
    
          });
    },100);
    var AdamTimer = setTimeout(Adam,7000);
      return 
};
function Adam(){
    var Boss = document.querySelector('#heroes');
    Boss.style.opacity=0.45; 
    setTimeout(() => {
        
        Boss.src=adam;
        Boss.style.height='500px';
        Boss.style.position = "relative"
        Boss.style.top='10px';
        Boss.style.right='20px';
        Boss.style.opacity=100; 
    
        var sutypos = document.querySelector('#info');
    
        sutypos.style.position = "relative"
        sutypos.style.bottom='480px';
    
        var Herotext = document.querySelector('#info h4');
        Herotext.textContent = 'Adam Lasky TeePublic ';
    
    
        var Buttons = document.querySelectorAll('.buttons');
        Buttons.forEach(function(element) {
            
            element.style.position = "relative"
            element.style.bottom='450px';
    
          });
          var AdamTimer = setTimeout(Male,7000);
    }, 100);
   

      return 
};
Adam();

function myTimer() {
    var Mark = document.querySelector('#jano');
    var rect = Mark.getBoundingClientRect();
    Mark.style.position='relative';
    Mark.style.left=rect.x-750-60+'px';
    console.log(rect.x);
    if(rect.x ===330)
    {
        myStopFunction();  
   
    

    }
    else if(rect.x ===-210)
    {     
        myStopFunction();      
    }
    else if(rect.x ===-750)
    {      
      myStopFunction();    
    }
    else if(rect.x ===-1710)
    {    
        RestartString();  
    }
    
}

var myVar = window.setInterval(myTimer, 100);


function RestartTimer(){
    myVar = setInterval(myTimer, 100); 
}
function myStopFunction() {
    window.clearInterval(myVar);
    setTimeout(RestartTimer,4000);
 }
 function RestartString(){
    window.clearInterval(myVar);
    var Mark = document.querySelector('#jano');
    var rect = Mark.getBoundingClientRect();
    Mark.style.position='relative';
    console.log(rect.x)
    Mark.style.left=rect.x+1650-60+'px';
    RestartTimer();
}
/*function RestartTimer(){
    myVar = setInterval(myTimer, 100); 
}
function myStopFunction() {
   window.clearInterval(myVar);
   setTimeout(RestartTimer,4000);
}

function RestartString(){
    window.clearInterval(myVar);
    var Mark = document.querySelector('#jano');
    var rect = Mark.getBoundingClientRect();
    Mark.style.position='relative';
    console.log(rect.x)
    Mark.style.left=1120+'px';
    RestartTimer();
}*/