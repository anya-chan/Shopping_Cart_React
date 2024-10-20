import React from 'react'
import {useState, useEffect} from 'react' //React Hook
import {Link} from 'react-router-dom'
import Title from './Title'
import QuantityBtn from './QuantityBtn'

export default function ProductList() {
  
    let [productList, setProductList] = useState([])
    let [input, setInput] = useState('')
    let [token, setToken] = useState('')

    const loginData = {
        username: 'admin',
        password: '654321'
      };
    
      fetch('http://localhost:8081/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })
        .then(response => response.json())
        .then(data => {
          const token = data.token;
          // ..Save the token in state or localStorage
          setToken(token);
        })
        .catch(error => {
          console.error('Login failed:', error);
        });

        useEffect(() => {
            if (token) {
              fetch('http://localhost:8081/product/all', {
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              })
                .then(response => response.json())
                .then(data => {
                  // Set the productList state with the received data
                  setProductList(data);
                })
                .catch(error => {
                  console.error('Error fetching product list:', error);
                });
            }
          }, [token]);

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
            <input type="text" onChange={e=>handleChange(e)} />
            <Title mainTitle='請選擇要的產品'/>
            {product} <button onClick={handleClick}>Button</button>
            {!show && <button onClick={handleShow}>Show product</button>}
            {show && <button onClick={handleHide}>Hide product</button>}
            {/* 如加入public folder, 要加process.env.PUBLIC_URL */}
            { show && productList.map(product => {
                return (
                    <div className="productBorder" key={product.id}>
                        {product.name}<br/>
                        {product.price}<br/>
                        <Link to={"/product/" + product.id}><img src={process.env.PUBLIC_URL + '/img/' + product.image} alt={product.name} /></Link><br/>
                        {product.description}<br/>
                        <QuantityBtn />
                    </div>
                    
                )
            })}
        </div>
    </div>
  )
}
