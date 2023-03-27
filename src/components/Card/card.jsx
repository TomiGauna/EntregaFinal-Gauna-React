import { Link } from 'react-router-dom'
import styles from '../Card/card.module.scss'

const Card = ( {product} ) => {
  return (
    <Link to={`${product.id}`}>
      <div className={styles.card}>
          <img src={product.image} alt={product.title} />
          <h4 key={product.id}>{product.title}</h4>
          <p>{product.price}</p>
      </div>
    </Link>
  )
}

export default Card