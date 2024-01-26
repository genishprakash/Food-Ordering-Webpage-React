import styles from './Card.module.css'
import PropTypes from 'prop-types'
const Card=(props)=>{
    return <div className={styles.card}>{props.children}</div>
}

export default Card;

Card.propTypes={
    children:PropTypes.node.isRequired,
}