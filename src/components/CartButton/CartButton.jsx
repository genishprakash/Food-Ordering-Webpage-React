import styles from "../CartButton/CartButton.module.css";
import CartIcon from "../CartIcon/CartIcon";
import PropTypes from "prop-types";
const CartButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onclick}>
      <span className={styles.icon}><CartIcon></CartIcon></span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default CartButton;

CartButton.propTypes = {
  children: PropTypes.node.isRequired,
  onclick:PropTypes.func.isRequired,
};
