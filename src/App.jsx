import { Route, Routes } from 'react-router-dom';
import './App.css'
import ArticleDetail from './components/ItemDetail/itemdetail';
import ItemListContainer from './components/ItemListContainer(Home)/itemlistcontainer';
import Navbar from './components/Navbar/navbar';
import ControlledCarousel from './components/Carousel/carousel';
import CartSupplier from './contexts/CartContext';
import CartFilling from './components/CartFilling/CartFilling';
import db from '../db/firebase-config';


function App() {

  return (
    <>
      {<CartSupplier>
        <Navbar logoIcon= '../imgs/brand-icon.png'/>
        {/* <ControlledCarousel /> */}
        <Routes>
          <Route path = "/" element = {<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ArticleDetail />}/>
          <Route path='/404' element={<h2>Error 404: Article Not Found</h2>} />
          <Route path='/cart' element={<CartFilling />} />
        </Routes>
      </CartSupplier>}
    </>

  )
}

export default App
