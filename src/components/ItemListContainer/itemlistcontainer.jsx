import React from 'react'
import styles from './itemlistcontainer.module.scss'


const ItemListContainer = ({greeting}) => {
  return (
    <div className={styles.itemlistcontainer}>
        <p>{greeting}</p>
    </div>
 )
}



export default ItemListContainer