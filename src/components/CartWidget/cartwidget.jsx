import styles from './cartwidget.module.scss';

const CartWidget = ({icon}) => {
  return (
    <div>
      <img className={styles.cartview} src={icon} alt="Shopping Cart" />
      <span className={styles.quantityvisualizer}>0</span>
    </div>
  )
}

export default CartWidget