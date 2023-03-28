import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import styles from '../ArticleDetail/articledetail.module.scss'

const ArticleDetail = () => {
 
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
      fetch('/src/components/products/footballshirts.json')
        .then((response) => response.json())
        .then((data) => {
          const prod = data.find((product) => product.id == id)
          setProduct(prod);
        })
    }, []);

    if(!product){
      return <Navigate to='/404' />
    }
    
 
  return (
    <div className={styles.detailcontainer}>
        <img src={product.img} alt={product.name} />
        <h4 key={product.id}>{product.name}</h4>
        <p>Team: {product.team}</p>
        <p>League: {product.shownleague}</p>
        <p>${product.price}</p>
        <button>Buy</button>
    </div>
  )
}

export default ArticleDetail