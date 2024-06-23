import React from 'react'
import {Link, useParams} from 'react-router-dom'
import Title from './Title'

export default function ProductDetail() {
    let params = useParams()
  return (
    <div>
        <Title mainTitle={params.id+'產品資料'}/>
        #{params.id}
        <div>ProductDetail</div>
        <Link to="/checkout">checkout</Link>
        <br/>
        <Link to="/">回到首頁</Link>
    </div>
    
  )
}
