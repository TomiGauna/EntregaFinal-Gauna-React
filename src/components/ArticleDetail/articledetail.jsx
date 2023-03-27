import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ArticleDetail = () => {
 
    const [product, setProduct] = useState({})
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
      fetch(`../products/footballshirts.json`)
        .then((response) => response.json())
        .then((data) => {
          const prod = data.find((product) => product.id === id)
          setProduct(prod);
        })
    }, [])
    
 
  return (
    <div>
        <img src={product.img} alt={product.name} />
        <h4 key={product.id}>{product.name}</h4>
        <p>{product.team}</p>
        <p>{product.league}</p>
        <p>{product.price}</p>
        carddetail
    </div>
  )
}

export default ArticleDetail