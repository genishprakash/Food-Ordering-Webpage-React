import styles from "./Cart.module.css";
import Modal from "../Modal/Modal";
import PropTypes from 'prop-types'
const Cart = (props) => {
  const items = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];
  const cartItems = (
    <ul className={styles['cart-items']}>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount:</span>
        <span>35.14</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>Close</button>
        <button className={styles.button} >Order</button>
      </div>
    </Modal>
  );
};

Cart.propTypes={
    onHideCart:PropTypes.func.isRequired,
  }

export default Cart;
