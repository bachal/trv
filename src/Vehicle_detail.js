import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Carousel, Item, Caption, Card, Col, Figure, Button,ButtonGroup,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';
import './vehicle.css'
import Dynamic_vehicles from './Dynamic_vehicles'
import all_vehicle from './Dynamic_vehicles'
import {vt} from './Given_api'
export default function Vehicle_detail(props) {
   
    const given_vehicle=props.vehicle_data;
    
    return (<div className="row">
        <div className="col-12 col-md-12 col-lg-12" id="ck">
        
            <Card className="text-center bg-light">
                <Card.Header className="bg-success">{given_vehicle.name}</Card.Header>
                <Card.Body>
                    
                    <Card.Title>{given_vehicle.name} DETAIL</Card.Title>
                    <Card.Text >
                    <img className="imgsizes" src={process.env.PUBLIC_URL+given_vehicle.vehicle_name} alt="vehicle"  />
                    
                    <Form.Group className=" mt-2 ">
                           <Form.Row>
                                <Form.Label className="col-6 col-md-4 col-lg-6 text-right">
                                     Vehicle Type:-
                                 </Form.Label>
                                 <Form.Label className="col-4 col-md-4 col-lg-2 text-center">
                                     SUV
                                 </Form.Label>
                            
                             </Form.Row>
                             <Form.Row>
                                <Form.Label className="col-6 col-md-4 col-lg-6 text-right">
                                     Vehicle Name:-
                                 </Form.Label>
                                 <Form.Label className="col-4 col-md-4 col-lg-2 text-center">
                                     TATA_SUMO
                                 </Form.Label>
                            
                             </Form.Row>

                             <Form.Row>
                                <Form.Label className="col-6 col-md-4 col-lg-6 text-right">
                                    Capacity:-
                                 </Form.Label>
                                 <Form.Label className="col-4 col-md-4 col-lg-2 text-center">
                                     7 + (1 Driver) 
                                 </Form.Label>
                            
                             </Form.Row>
                             <Form.Row>
                                <Form.Label className="col-6 col-md-4 col-lg-6 text-right">
                                    Rate:-
                                 </Form.Label>
                                 <Form.Label className="col-4 col-md-4 col-lg-2 text-center">
                                     15/per km 
                                 </Form.Label>
                            
                             </Form.Row>

                             <Form.Row>
                                <Form.Label className="col-6 col-md-4 col-lg-6 text-right">
                                    Holting Charges:-
                                 </Form.Label>
                                 <Form.Label className="col-4 col-md-4 col-lg-2 text-center">
                                     2000 Rs/per night or day
                                 </Form.Label>
                            
                             </Form.Row>
                             <Form.Row>
                                <Form.Label className="col-6 col-md-4 col-lg-6 text-right">
                                   Average Running:-
                                 </Form.Label>
                                 <Form.Label className="col-4 col-md-4 col-lg-2 text-center">
                                    Max. 300 km / day
                                 </Form.Label>
                            
                             </Form.Row>
                    </Form.Group>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="danger" onClick={() => back()}>BACK</Button>
                       
                    </ButtonGroup>
                    </Card.Text>
                    
                </Card.Body>
                
            </Card>

            </div>
        </div>



    )


}

function back(){

    



       
    ReactDOM.render(<Dynamic_vehicles /> , document.getElementById('vehicle'));
       
    
}