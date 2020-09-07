import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Row, CardDeck,Carousel, Item, Caption, Card, Col, Figure } from 'react-bootstrap';
import Vehicales_card from './Vehicales_card';
import 'bootstrap/dist/css/bootstrap.css';
import './cdht.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



export  const vt =[{"vehicle_name":"new_nano.jpg","name":"TATA NANO","type":"Hatchback","capacity":"4","rates":"10","charges":"500","avg_running":"300"},
{"vehicle_name":"wagnor_new.jpg","name":"WAGNOR","type":"Hatchback","capacity":"4","rates":"10","charges":"500","avg_running":"300"},
{"vehicle_name":"kuv_new.jpg","name":"KUV","type":"Hatchback","capacity":"4","rates":"12","charges":"500","avg_running":"300"},
{"vehicle_name":"tuv.jpg","name":"TUV","type":"SUV","capacity":"6","rates":"12","charges":"500","avg_running":"300"},
{"vehicle_name":"swift_new.png","name":"SWIFT","type":"Hatchback","capacity":"4","rates":"12","charges":"500","avg_running":"300"},
{"vehicle_name":"sumo_new.jpg","name":"TATA SUMO","type":"SUV","capacity":"8","rates":"15","charges":"500","avg_running":"300"},
{"vehicle_name":"bolero.jpeg","name":"BOLERO","type":"SUV","capacity":"6","rates":"14","charges":"500","avg_running":"300"},
{"vehicle_name":"scorpio.jpg","name":"SCORPIO","type":"SUV","capacity":"6","rates":"17","charges":"500","avg_running":"300"},
{"vehicle_name":"hexas.jpg","name":"HEXA","type":"SUV","capacity":"7","rates":"19","charges":"500","avg_running":"300"},
{"vehicle_name":"ertiga_new.jpg","name":"ERTIGA","type":"SUV","capacity":"7","rates":"17","charges":"500","avg_running":"300"},
{"vehicle_name":"fortunar.jpg","name":"FORTUNAR","type":"SUV","capacity":"7","rates":"20","charges":"700","avg_running":"300"},
{"vehicle_name":"safari.jpg","name":"SAFARI","type":"SUV","capacity":"6","rates":"20","charges":"600","avg_running":"300"},
{"vehicle_name":"travller.jpg","name":"TRAVLLER","type":"TRAVLLER","capacity":"16","rates":"16","charges":"500","avg_running":"300"},
{"vehicle_name":"star_bus.jpg","name":"EICHER","type":"MINI-BUS","capacity":"31","rates":"28","charges":"800","avg_running":"300"},
{"vehicle_name":"bus.jpg","name":"BUS","type":"BUS","capacity":"51","rates":"54","charges":"1000","avg_running":"300"}]
