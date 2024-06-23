import React from 'react'
import Title from './Title'
import {Link} from 'react-router-dom'

export default function Checkout() {
  return (
    <div>
        <Title mainTitle='結賬' />
        <div>Checkout</div>
        <Link to='/'>回到首頁</Link>
    </div>
    
  )
}
