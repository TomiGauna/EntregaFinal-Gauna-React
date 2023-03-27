import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card/card';
import styles from '../ItemListContainer(Home)/itemlistcontainer.module.scss';
import axios from "axios";

const Itemlistcontainer = () => {

  const [products, setProduct] = useState([])
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get('/products/footballshirts.json');
      if (categoryName) {
        setProduct(
          resp.data.filter((product) => product.league === categoryName )
        );
        } else {
        setProduct(resp.data)
      }
      };
      fetchData();
  }, [categoryName]);


  

  return (
    <div className={styles.itemlistcontainer}>
      {products.map((product) => 
      <Card key={product.id} product={product}  />)}
    </div>
  )
}

export default Itemlistcontainer