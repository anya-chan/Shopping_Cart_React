import HomePage from './HomePage';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/productList' element={<ProductList/>} />
          <Route path='/product' element={<ProductDetail/>} >
            <Route path=':id' element={<ProductDetail/>} />
          </Route>
          <Route path='*' element={<h1>Error Page</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
