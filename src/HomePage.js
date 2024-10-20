import React from 'react'
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import {useState, useEffect} from 'react' //React Hook
import Title from './Title'
import QuantityBtn from './QuantityBtn'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Navbar, Container, Row, Col, Button, Alert, Breadcrumb, Cart} from 'react-bootstrap'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function HomePage() {
    return (
    <div>
        <Title />
        <h1>Here is home page.</h1>
    </div>
  )
}
