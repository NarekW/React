import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import ReactDOM from 'react-dom';
//=========== Page 1 Components==============================
import Homepage_1_Header from './Components/HomePage(1)/Elements(1)/Page(1)_Header.js';
import Homepage_1_Elm_1 from './Components/HomePage(1)/Elements(1)/Page(1)_Element(1).js';
import Homepage_1_Elm_2 from './Components/HomePage(1)/Elements(1)/Page(1)_Element(2).js';
import Homepage_1_Elm_3 from './Components/HomePage(1)/Elements(1)/Page(1)_Element(3).js';
import Homepage_1_Elm_4 from './Components/HomePage(1)/Elements(1)/Page(1)_Element(4).js';
import Homepage_1_Elm_5 from './Components/HomePage(1)/Elements(1)/Page(1)_Element(5).js';
import Homepage_1_Elm_6 from './Components/HomePage(1)/Elements(1)/Page(1)_Element(6).js';
import Homepage_1_Elm_7 from './Components/HomePage(1)/Elements(1)/Page(1)_Element(7).js';
import Homepage_1_Elm_8 from './Components/HomePage(1)/Elements(1)/Page(1)_Element(8).js';
import Homepage_1_Footer from './Components/HomePage(1)/Elements(1)/Page(1)_Footer.js';
//=========== Page 2 Components==============================
import Homepage_2_Header from './Components/HomePage(2)/Elements(2)/Page(2)_Header.js';
import Homepage_2_element_1 from './Components/HomePage(2)/Elements(2)/Page(2)_Element(1)';
import Homepage_2_element_2 from './Components/HomePage(2)/Elements(2)/Page(2)_Element(2)';
import Homepage_2_element_5 from './Components/HomePage(2)/Elements(2)/Page(2)_Element(5)';
import Homepage_2_element_6 from './Components/HomePage(2)/Elements(2)/Page(2)_Element(6)';
import Homepage_2_element_7 from './Components/HomePage(2)/Elements(2)/Page(2)_Element(7)';
import Homepage_2_element_8 from './Components/HomePage(2)/Elements(2)/Page(2)_Element(8)';
import Homepage_2_element_10 from './Components/HomePage(2)/Elements(2)/Page(2)_Element(10)';
import Homepage_2_footer from './Components/HomePage(2)/Elements(2)/Page(2)_footer';


//===========================================================
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

const Home = () =>(
    <div className='main'>
        <Homepage_1_Header/>
        <Homepage_1_Elm_1/>
        <Homepage_1_Elm_2/>
        <Homepage_1_Elm_3/>
        <Homepage_1_Elm_4/>
        <Homepage_1_Elm_5/>
        <Homepage_1_Elm_6/>
        <Homepage_1_Elm_7/>
        <Homepage_1_Elm_8/>
        <Homepage_1_Footer/>
 </div>
)
const rollWorks = () =>(
  
    <div className='main-2'>
        <Homepage_2_Header/>
        <Homepage_2_element_1/>
        <Homepage_2_element_2/>
        <Homepage_2_element_5/>
        <Homepage_2_element_6/>
        <Homepage_2_element_7/>
        <Homepage_2_element_8/>
        <Homepage_2_element_10/>
        <Homepage_2_footer/>
    </div>

)


class Navigation extends React.Component{
    render() {
        return(
            <BrowserRouter history={"history"}>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Home' component={Home}/>
                <Route exact path='/RollWorlks' component={rollWorks}/>
           
            </BrowserRouter>
        )
    }
}
export default Navigation;


ReactDOM.render(<Navigation />,document.querySelector('body'));
serviceWorker.unregister();

















/*ReactDOM.render(<Homepage_1_Elm_1 />, document.querySelector('.Homepge-2'));
ReactDOM.render(<Homepage_1_Elm_2 />, document.querySelector('.Homepge-3'));
ReactDOM.render(<Homepage_1_Elm_3 />, document.querySelector('.Homepge-4'));
ReactDOM.render(<Homepage_1_Elm_4 />, document.querySelector('.Homepge-5'));
ReactDOM.render(<Homepage_1_Elm_5 />, document.querySelector('.Homepge-6'));
ReactDOM.render(<Homepage_1_Elm_6 />, document.querySelector('.Homepge-7'));
ReactDOM.render(<Homepage_1_Elm_7 />, document.querySelector('.Homepge-8'));
ReactDOM.render(<Homepage_1_Elm_8 />, document.querySelector('.Homepge-9'));
ReactDOM.render(<Homepage_1_Footer />, document.querySelector('.footerblock'));*/
