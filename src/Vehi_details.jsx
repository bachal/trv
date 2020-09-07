import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Carousel, Item, Caption, Card, Col, Figure, Button, ButtonGroup, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';
import './vehicle.css'
import Dynamic_vehicles from './Dynamic_vehicles'
import all_vehicle from './Dynamic_vehicles'
import {vt} from './Given_api'

export default function Vehi_details(props) {
    
    const given_vehicle=props.vehicle_data;

    return (
        <div className="card col-sm-12 col-md-12 col-lg-12" id="ck">
             <div className=" bg-white  text-center " style={{marginTop:"90px"}}>
                    Selected Vehicle Details Here Now
                </div>
               
            <div className="row">
                
                <div className="card col-sm-12 col-md-6 col-lg-6  d-flex justify-content-center border-white" style={{height:"500px"}} >
                
                <div className="card-body text-center mt-5">
                
                    <img className="zoom imgsizes" src={process.env.PUBLIC_URL + given_vehicle.vehicle_name} alt="vehicle"  style={{height:"50%"}} />
                    <h1 className="mt-5">{given_vehicle.name}</h1>
                </div>
                </div>

                <div className="card col-sm-12 col-md-6 col-lg-6  border-danger justify-content-center">
                   
                   
               
                    
                    <div className="row  card-body  text-center mt-5 ">
                        
                        <form>
                            <div className="form-group row ">
                                <label className="col-6 col-sm-6 col-form-label">Vehicle Name:-</label>
                                <div className="col-6 col-sm-6 mt-2">
                                {given_vehicle.name}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-6 col-sm-6 col-form-label">Vehicle Type:-</label>
                                <div className="col-6 col-sm-6 mt-2">
                                {given_vehicle.type}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-6 col-sm-6 col-form-label">Vehicle Capacity:-</label>
                                <div className="col-6 col-sm-6 mt-2">
                                {given_vehicle.capacity} + (1 Driver) 
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className=" col-6 col-sm-6 col-form-label">Vehicle Rates:-</label>
                                <div className=" col-6 col-sm-6 mt-2">
                                {given_vehicle.rates} /per km 
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-6 col-sm-6 col-form-label">Vehicle Holding Charges:-</label>
                                <div className="col-6 col-sm-6 mt-2">
                                {given_vehicle.charges} Rs/per night or day
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-6 col-sm-6 col-form-label">Vehicle Average Running:-</label>
                                <div className="col-6 col-sm-6 mt-2">
                                
                                Min.  {given_vehicle.avg_running} km / day
                                </div>
                            </div>

                        </form>
                    </div>


                </div>


            </div>
        </div>

    )




}

