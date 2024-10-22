import React from 'react'
import {useState, useEffect} from 'react' 
import HomePage from './HomePage';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  let [productList, setProductList] = useState([])
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

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage productList={productList} />} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/productList' element={<ProductList productList={productList} />} />
          <Route path='/product' element={<ProductDetail/>} >
            <Route path=':id' element={<ProductDetail/>} />
          </Route>
          <Route path='*' element={<h1>Error Page</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
