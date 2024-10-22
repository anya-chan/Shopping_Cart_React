import React from 'react'
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import {useState, useEffect} from 'react' //React Hook
import Title from './Title'
import QuantityBtn from './QuantityBtn'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel, Image, Nav, Navbar, Container, Row, Col, Button, Alert, Breadcrumb, Cart} from 'react-bootstrap'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function HomePage({ productList }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

    return (
    <div>
        <Title />
        <Carousel activeIndex={index} data-bs-theme="dark" interval={3000} onSelect={handleSelect}>
        { productList.map(product => {
                return (
                  <Carousel.Item key={product.id}>
                    <img
                      className="d-block w-100"
                      src={process.env.PUBLIC_URL + '/img/' + product.image} 
                      alt={product.name}
                    />
                    <Carousel.Caption>
                      <h5>{product.name}</h5>
                      <p>{product.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
            })}
    </Carousel>
    </div>
  )
}
