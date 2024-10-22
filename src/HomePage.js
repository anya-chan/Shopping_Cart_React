import React from 'react'
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import {useState, useEffect} from 'react' //React Hook
import Title from './Title'
import QuantityBtn from './QuantityBtn'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Image, Nav, Navbar, Container, Row, Col, Button, Alert, Breadcrumb, Cart} from 'react-bootstrap'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function HomePage({ productList }) {
    return (
    <div>
        <Title />
        <Container fluid>
            <Row>
              { productList.map(product => {
                return (
                  <Col key={product.id} xs={6} sm={4} md={3} className="g-3">
                      <Link to={"/product/" + product.id}>
                      <Image src={process.env.PUBLIC_URL + '/img/' + product.image} alt={product.name} className="productBorder" fluid />
                      <Container>
                            {product.name}<br/>
                      </Container>
                      </Link><br/>
                        {product.price}<br/>
                        {product.description}<br/>
                        <QuantityBtn />
                  </Col>
                )
            })}
              
            </Row>
            </Container>
    </div>
  )
}
