import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card/card';
import styles from '../ItemListContainer(Home)/itemlistcontainer.module.scss';


const Itemlistcontainer = () => {

  const [products, setProduct] = useState([])
  const { categoryName } = useParams();

   if (categoryName) {
    useEffect(() => {
      fetch('/src/components/products/footballshirts.json')
          .then(response => response.json())
          .then(data => setProduct(data.filter((product) => product.league == categoryName)) )
  }, [categoryName]);
  } else {
    useEffect(() => {
      fetch('/src/components/products/footballshirts.json')
          .then(response => response.json())
          .then(data => setProduct(data))
  }, [categoryName]);
}

  return (
    <div className={styles.itemlistcontainer}>
      {products.map((product) => 
      <Card key={product.id} product={product}  />)}
    </div>
  )
}

export default Itemlistcontainer