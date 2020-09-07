import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Carousel, Item, Caption, Card, Col, Figure, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './vehicle_card.css'
import Vehicle_detail from './Vehicle_detail';
import Vehi_details from './Vehi_details';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';

import {vt} from './Given_api'



export default function Cour_dynamic(prop) {
   
    let veh = prop.name;
    let vehicles=prop.vehicle;
    let veh_name = veh.toUpperCase();
    let v_name='../src/'+veh
    console.log(typeof(v_name));
    let data = {uri: veh}
    //const imageName = require('../src/'+veh)
    let source = prop.imageIsRelative ?
                 '../src/' + veh :
                 '../src/' + veh;


    return (<div className="col-sm-12 col-md-6 col-lg-4">

        <Card className="col-sm-12 col-md-12 col-lg-12 mt-3 text-center crd border border-dark zoom"  >
            <Card.Body>
            <div className="zoom">
           
            <Card.Img variant="top" src='./src/bus.jpg'  style={{ height: '100px',width: '100%'}} className="zoom"/>
            </div>
                <Card.Title className="mt-3">{vehicles}</Card.Title>
                <Card.Text>


                </Card.Text>
                <a href="#ck" type="button" variant="info" className="btn btn-sm btn-primary" id={veh} value="bigb" onClick={() => submit(veh)}>Detail</a>
            </Card.Body>
        </Card>

    </div>)

}


function submit(name){

    
const cars=vt;

{cars.filter( cars=> cars.vehicle_name == name).map(filteredcar => (
   // console.log(filteredcar)
   // ReactDOM.render(<Vehicle_detail vehicle_data={filteredcar} /> , document.getElementById('vehicle_data'))
    ReactDOM.render(<Vehi_details vehicle_data={filteredcar} /> , document.getElementById('vehicle_data'))

  ))}
       
    //ReactDOM.render(<Vehicle_detail vehicle_name={name} /> , document.getElementById('vehicle'));
       
    
}

