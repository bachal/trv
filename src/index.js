import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbars from './Navbars';
import Courasel_style from './Courasel_style';
import Dynamic_cour from './Dynamic_cour'
import Vehicales_card from './Vehicales_card'
import Dynamic_vehicles from './Dynamic_vehicles'
import  Ft from './Ft'
import Header from './Header'
import * as serviceWorker from './serviceWorker';
import Vehi_details from './Vehi_details'
import About from './About' 
import Contact from './Contact' 


ReactDOM.render(<Navbars  />,document.getElementById('navs'));
ReactDOM.render(<Header  />,document.getElementById('Header_compo'));
ReactDOM.render(<Dynamic_cour  />,document.getElementById('cour'));
ReactDOM.render(<Dynamic_vehicles  />,document.getElementById('vehicle'));
//ReactDOM.render(<Vehi_details  />,document.getElementById('vehicle_data'));
//ReactDOM.render(<Ft  />,document.getElementById('Footer_compo'));
ReactDOM.render(<About  />,document.getElementById('about'));
ReactDOM.render(<Contact  />,document.getElementById('contact'));


serviceWorker.register();
