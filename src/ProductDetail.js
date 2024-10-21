import React from 'react'
import {Link, useParams} from 'react-router-dom'
import Title from './Title'

export default function ProductDetail() {
    let params = useParams()
  return (
    <div>
        <Title />
        #{params.id}
        <div>ProductDetail</div>
        <Link to="/checkout">checkout</Link>
        <br/>
        <Link className='mx-1' to="/productList">回到上頁</Link>
        <Link to="/">回到首頁</Link>
    </div>
    
  )
}
