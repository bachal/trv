import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Carousel, Item, Caption, Card, Col, Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Tata_safari from './vehicles/tata_safari.jpeg';
import Jeeto from './vehicles/mahindra_jeeto.jpeg';
import Scorpio from './vehicles/mahindra_scorpio.jpeg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './coursel.css'


let all_vehicles=[{"Vehicle":"Jeeto"},{"Vehicle":"Tata_safari"},{"Vehicle":"Scorpio"}]

//create classNameName for nav
class Courasel_style extends Component {
  

    render() {

        return (<div className="mrgt"> 


<Carousel >
  <Carousel.Item className="coursize">
    <img
      className="imgsize"
      src={Jeeto}
      alt="First slide"
      
    />
    <Carousel.Caption>
      
      <p>Jeeto</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="coursize">
    <img
      className="imgsize"
      src={Jeeto}
      alt="Third slide"
      style={{ height: '100%',width:'100%' }}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="coursize">
    <img
     className="imgsize"
      src={Jeeto}
      alt="Third slide"
      style={{ height: '100%',width:'100%' }}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
        )
    }
}



export default Courasel_style;