import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Row, CardDeck,Carousel, Item, Caption, Card, Col, Figure } from 'react-bootstrap';
import Vehicales_card from './Vehicales_card';
import 'bootstrap/dist/css/bootstrap.css';
import './cdht.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {vt} from './Given_api'

export default function  Dynamic_vehicles () {
 //const all_vehicles=[{"vehicle_name":"new_nano.jpg","name":"TATA NANO"},{"vehicle_name":"wagnor_new.jpg","name":"WAGNOR"},{"vehicle_name":"kuv_new.jpg","name":"KUV"},{"vehicle_name":"tuv.jpg","name":"TUV"},{"vehicle_name":"swift_new.png","name":"SWIFT"},{"vehicle_name":"sumo_new.jpg","name":"TATA SUMO"},{"vehicle_name":"bolero.jpeg","name":"BOLERO"},{"vehicle_name":"scorpio.jpg","name":"SCORPIO"},{"vehicle_name":"hexas.jpg","name":"HEXA"},{"vehicle_name":"ertiga_new.jpg","name":"ERTIGA"},{"vehicle_name":"fortunar.jpg","name":"FORTUNAR"},{"vehicle_name":"safari.jpg","name":"SAFARI"},{"vehicle_name":"travller.jpg","name":"TRAVLLER"},{"vehicle_name":"star_bus.jpg","name":"EICHER"},{"vehicle_name":"bus.jpg","name":"BUS"}]
    const all_vehicles=vt;
const chk = all_vehicles.map((vehicles,i) => {
    let dyim='../src/bus.jpg';
   return <Vehicales_card name={all_vehicles[i].vehicle_name} vehicle={all_vehicles[i].name} />
})




        return (
            <div class="row" id="vehicles">
                 <Card className="col-12 col-md-12 col-lg-12 mt-3 bg-light"  >
                        <Card.Body className="" >

                            <Card.Title className="text-center "><h2>ALL VEHICLES</h2></Card.Title>
                            
                            <div class="row">
                                {chk}
                            </div>
                        
                        </Card.Body>
             </Card>
        </div>)


            

    
}