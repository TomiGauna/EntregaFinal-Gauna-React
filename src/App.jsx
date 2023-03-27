/* import { useEffect, useState } from 'react'; */
import { Route, Routes } from 'react-router-dom';
import './App.css'
import ArticleDetail from './components/ArticleDetail/articledetail';
import ItemListContainer from './components/ItemListContainer(Home)/itemlistcontainer';
import Navbar from './components/Navbar/navbar';
import products from './components/products/footballshirts.json';

function App() {

  /* const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(productsavailable)
      .then((response) => response.json())
      .then((data) => { 
        console.log(data)
        /* setProducts(data) });
  }, []) */

  return (
    <>
      <Navbar logoIcon= '../imgs/brand-icon.png'/>
      <Routes>
        <Route path = "/" element = {<ItemListContainer products= {products}/>} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path='/:id' element={<ArticleDetail />}/>
      </Routes>
      
    </>

  )
}

export default App
