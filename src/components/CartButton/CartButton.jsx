import styles from "../CartButton/CartButton.module.css";
import CartIcon from "../CartIcon/CartIcon";
import PropTypes from "prop-types";
import CartContext from "../../Context/CartContext";
import { useContext, useEffect, useState } from "react";
const CartButton = (props) => {

  const [btnAdded,setbtnAdded]=useState(false)
  const Cartctx = useContext(CartContext);

  const {items}=Cartctx
  useEffect(()=>{
    if(items.length===0){
      return
    }
    setbtnAdded(true)

    const timer=setTimeout(()=>{
      setbtnAdded(false)
    },300)


    return ()=>{
      clearTimeout(timer)
    }
  },[items])
  const btnClasses = `${styles.button} ${btnAdded ? styles.bump :''}`;
  const numberOfCartItems = Cartctx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  return (
    <button className={btnClasses}onClick={props.onclick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;

CartButton.propTypes = {
  onclick: PropTypes.func.isRequired,
};
