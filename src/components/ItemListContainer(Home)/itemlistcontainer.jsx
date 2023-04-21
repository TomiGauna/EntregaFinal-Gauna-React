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
            .then(resp => setProducts(resp.docs.map(product => ({ ...product.data(), id: product.id }))))

      } else {
          getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(product => ({ ...product.data(), id: product.id, }))))
        }
  }, [categoryName]);




  return (
    <div className={styles.itemlistcontainer}>
      {products.map((product) => 
      <Card key={product.id}  product={product}  />)}
    </div>
  )
}

export default Itemlistcontainer