import './App.css'
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';
import Navbar from './components/Navbar/navbar';

function App() {

  return (
    <>
      <Navbar logoIcon= '../imgs/brand-icon.png'/>
      <ItemListContainer greeting="Welcome to Our Page" />
    </>

  )
}

export default App
