
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './page/Main'
import ProductList from './page/ProductList'
import BookMark from './page/BookMark'
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/bookmark" element={<BookMark />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    
  );
}

export default App;
