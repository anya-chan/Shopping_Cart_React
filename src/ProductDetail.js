import React from 'react'
import {Link, useParams} from 'react-router-dom'
import Title from './Title'
import QuantityBtn from './QuantityBtn'
import {Carousel, Image, Nav, Navbar, Container, Row, Col, Button, Alert, Breadcrumb, Cart} from 'react-bootstrap'

export default function ProductDetail({pid}) {
    let params = useParams()
  return (
    <div>
        <Title />
        #{params.id}
        <div>ProductDetail</div>
        <QuantityBtn />
        <Link to="/checkout">checkout</Link>
        <br/>
        <Link className='mx-1' to="/productList">回到上頁</Link>
        <Link to="/">回到首頁</Link>
    </div>
    
  )
}
