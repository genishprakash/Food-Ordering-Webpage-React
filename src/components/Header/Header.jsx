import styles from "../Header/Header.module.css";
import CartButton from "../CartButton/CartButton";
import mealsImage from "../../assets/meals.jpg"

import PropTypes from 'prop-types'
const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <CartButton onclick={props.onShowCart}></CartButton>
      </header>
      <div className={styles.img_div}>
        <img src={mealsImage} alt="" />
      </div>
    </>
  );
};

export default Header;

Header.propTypes={
  onShowCart:PropTypes.func.isRequired,
}
