import styles from './MealsList.module.css'
import MealsForm from './MealsForm';
import PropTypes from 'prop-types'
const MealsList=(props)=>{

    const price = `$${props.price.toFixed(2)}`;
    return(
        <li className={styles.list}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealsForm id={props.id}></MealsForm>
            </div>
        </li>
    )
}

MealsList.propTypes={
    id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    price:PropTypes.string.isRequired,
}

export default MealsList