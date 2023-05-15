
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './page/Main'
import ProductList from './page/ProductList'
import BookMark from './page/BookMark'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/bookmark" element={<BookMark />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
