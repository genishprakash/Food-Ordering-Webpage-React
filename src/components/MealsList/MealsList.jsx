import styles from './MealsList.module.css'
import MealsForm from './MealsForm';
import PropTypes from 'prop-types'
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
const MealsList=(props)=>{
    const cartCtx=useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler=(amount)=>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
          });
    }   
    return(
        <li className={styles.list}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealsForm id={props.id} onAddToCart={addToCartHandler}></MealsForm>
            </div>
        </li>
    )
}

MealsList.propTypes={
    id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
}

export default MealsList