/* import { useEffect, useState } from 'react'; */
import { Route, Routes } from 'react-router-dom';
import './App.css'
import ArticleDetail from './components/ArticleDetail/articledetail';
import ItemListContainer from './components/ItemListContainer(Home)/itemlistcontainer';
import Navbar from './components/Navbar/navbar';
import products from './components/products/footballshirts.json';

function App() {

  return (
    <>
      <Navbar logoIcon= '../imgs/brand-icon.png'/>
      <Routes>
        <Route path = "/" element = {<ItemListContainer products= {products}/>} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ArticleDetail />}/>
        <Route path='/404' element={<h2>Error 404: Article Not Found</h2>} />
        <Route path='/cart' element={<h2>Items contained in shopping cart:</h2>} />
      </Routes>
      
    </>

  )
}

export default App
