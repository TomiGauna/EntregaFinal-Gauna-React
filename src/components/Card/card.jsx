import { Link } from 'react-router-dom'
import styles from '../Card/card.module.scss'

const Card = ( {product} ) => {
  return (
    <Link to={`/item/${product.id}`}>
      <div className={styles.card}>
          <img src={product.img} alt={product.name} />
          <h4 key={product.id}>{product.name}</h4>
          <p>${product.price}</p>
      </div>
    </Link>
  )
}

export default Card