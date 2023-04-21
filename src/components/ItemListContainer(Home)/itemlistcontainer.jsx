import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../ItemList/itemlist';
import styles from '../ItemListContainer(Home)/itemlistcontainer.module.scss';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


const Itemlistcontainer = () => {

  
  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const database = getFirestore();
    const queryCollection = collection(database, 'products');

    if (categoryName) {
        const filter = query(queryCollection, where('league', '==', categoryName));
          getDocs(filter)
            .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data() }))))

      } else {
          getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data() }))))
        }
  }, [categoryName]);
  


  /* const [products, setProduct] = useState([])
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
} */

  return (
    <div className={styles.itemlistcontainer}>
      {products.map((product) => 
      <Card /* key={product.id} */ product={product}  />)}
    </div>
  )
}

export default Itemlistcontainer