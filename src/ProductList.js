import React from 'react'
import {useState, useEffect} from 'react' //React Hook
import {Link} from 'react-router-dom'
import Title from './Title'
import QuantityBtn from './QuantityBtn'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Image, Container, Row, Col, Button, Alert, Breadcrumb, Cart} from 'react-bootstrap'

export default function ProductList({ productList }) {
  
    let [input, setInput] = useState('')

    useEffect(()=>{
        console.log(input)
    },[input])

    const [product, setProduct] = useState('水果')
    const [show, setShow] = useState(true)
    const handleClick = ()=>{
        setProduct('Change')
        console.log(product)
    }

    const handleShow = ()=>{
        setShow(true)
    }

    const handleHide = ()=>{
        setShow(false)
    }

    const handleChange = (e)=> {
        setInput(e.target.value)
    }

    return (
    <div>
        <div>
            <Title />
            {/*
              <input type="text" onChange={e=>handleChange(e)} />
              {product} <button onClick={handleClick}>Button</button>
              {!show && <button onClick={handleShow}>Show product</button>}
              {show && <button onClick={handleHide}>Hide product</button>}
             */}
            
            {/* 如加入public folder, 要加process.env.PUBLIC_URL */}
            <Container fluid>
            <Row>
              { show && productList.map(product => {
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
    </div>
  )
}
