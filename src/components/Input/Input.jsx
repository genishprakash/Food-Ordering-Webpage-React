import styles from './Input.module.css'
import PropTypes from 'prop-types'


const Input = (props) => {

  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}></input>
    </div>
  );
};


Input.propTypes={
    input:PropTypes.object.isRequired,
    label:PropTypes.string.isRequired,
}

export default Input;
