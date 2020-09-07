import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Carousel, Item, Caption, Card, Col, Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './coursel.css'



export default function Dynamic_cour() {


    const all_vehicles = [{ "Vehicle": "Jeeto" }, { "Vehicle": "Tata_safari" }, { "Vehicle": "Scorpio" }]
    return (<div className="mgb">
        <Carousel >
        <Carousel.Item className="coursize">
                <img
                    className="imgsized"
                    src={process.env.PUBLIC_URL+"/tata_sumo.jpg"}
                    
                    alt="First slide"

                />
                <Carousel.Caption>

                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="coursize">
                <img
                    className="imgsized"
                    src={process.env.PUBLIC_URL+"/kuv.JPG"}
                    
                    alt="First slide"

                />
                <Carousel.Caption>

                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="coursize">
                <img
                    className="imgsized"
                    src={process.env.PUBLIC_URL+"/tuv.jpg"}
                    
                    alt="First slide"

                />
                <Carousel.Caption>

                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="coursize">
                <img
                    className="imgsized"
                    src={process.env.PUBLIC_URL+"/hexa.jpg"}
                    
                    alt="First slide"

                />
                <Carousel.Caption>

                    
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="coursize">
                <img
                    className="imgsized"
                    src={process.env.PUBLIC_URL+"/bolero.jpeg"}
                    
                    alt="First slide"

                />
                <Carousel.Caption>

                  
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="coursize">
                <img
                    className="imgsized"
                    src={process.env.PUBLIC_URL+"/swift.jpg"}
                    
                    alt="First slide"

                />
                <Carousel.Caption>

                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="coursize">
                <img
                    className="imgsized"
                    src={process.env.PUBLIC_URL+"ertiga.jpg"}
                    
                    alt="First slide"

                />
                <Carousel.Caption>

                   
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="coursize">
                <img
                    className="imgsized"
                    src={process.env.PUBLIC_URL+"fortunar.jpg"}
                    
                    alt="First slide"

                />
                <Carousel.Caption>

                    
                </Carousel.Caption>
            </Carousel.Item>
           
            

        </Carousel>

</div>


    )

}