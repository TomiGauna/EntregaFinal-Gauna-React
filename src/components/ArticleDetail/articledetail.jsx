import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import styles from '../ArticleDetail/articledetail.module.scss'
import { CartContext } from '../../contexts/CartContext';
import { BsCartPlus } from "react-icons/bs";


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

    const [count, setCount] = useState(1);

    const increaseQuantity = () => {
      setCount(count + 1);
    }

    const decreaseQuantity = () => {
      setCount(count - 1);
    }

    const {pushItem} = useContext(CartContext);

 
  return (
    <div className={styles.detailcontainer}>
      <div className={styles.maincontainers}>
          <img src={product.img} alt={product.name} />
      </div>
      <div className={styles.container2}>
          <h4 key={product.id}>{product.name}</h4>
          <h6>${product.price}</h6>
          <p>Team: {product.team}</p>
          <p>League: {product.shownleague}</p>
          <div className={styles.form}>
            <p>Items:</p>
            <button disabled={count <= 1} onClick={decreaseQuantity}>-</button>
            <input 
              onChange={(e) => setCount(e.target.value)}
              value={count} />
            <button onClick={increaseQuantity}>+</button>
          </div>
          <button className={styles.buybtn} onClick={() => pushItem(product, count)} >Add To Cart <BsCartPlus /></button>
          {/* <ArticleButton onClick={pushItem} /> */}
      </div>
    </div>
  )
}

export default ArticleDetail