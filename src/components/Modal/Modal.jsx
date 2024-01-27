import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
const Backdrop = (props) => {
  return <div onClick={props.onHideCart}className={styles.backdrop}></div>;
};

const Overlay = (props) => {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
      </div>
    );
  };

const Modal = (props) => {
  const overlay = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}></Backdrop>, overlay)}

      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, overlay)}
    </>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onHideCart:PropTypes.func.isRequired,
};
Overlay.propTypes = {
  children: PropTypes.node.isRequired,
};
Backdrop.propTypes = {
    onHideCart:PropTypes.func.isRequired,
};
