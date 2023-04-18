import { Link } from 'react-router-dom';
import styles from '../Card/card.module.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';


const Card = ( {product} ) => {

  const name = useContext(CartContext);
  console.log('card: ', name);

  return (
    <Link to={`/item/${product.id}`}>
      <div className={styles.card}>
          <img src={product.img} alt={product.name} />
          <h6 key={product.id}>{product.name}</h6>
          <p>${product.price}</p>
      </div>
    </Link>
  )
}

export default Card