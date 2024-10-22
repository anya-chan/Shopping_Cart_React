import React from 'react'
import {useState, useEffect} from 'react' //React Hook
import {Carousel, Image, Nav, Navbar, Container, Row, Col, Button, Alert, Breadcrumb, Cart} from 'react-bootstrap'


export default function QuantityBtn() {
    let [numInCart, setNumInCart] = useState(0)
    const handleAdd = () => {
        setNumInCart(numInCart+1)
    }
    const handleSubtract = () => {
        setNumInCart(numInCart-1)
    }
  return (
    <div>
        {
            (numInCart === 0) ?
            <Button className='btn btn-light' onClick={handleAdd}>加入購物車</Button> :
            <div>
                <Button className='btn btn-dark' onClick={handleSubtract}>-</Button>
                <span class="mx-1">{numInCart}件</span>
                <Button className='btn btn-dark' onClick={handleAdd}>+</Button>
            </div>

        }
    </div>
  )
}
