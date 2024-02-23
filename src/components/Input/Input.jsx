import styles from './Input.module.css'
import PropTypes from 'prop-types'
import React from 'react';

const Input = React.forwardRef((props,ref) => {

  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref}{...props.input}></input>
    </div>
  );
});


Input.propTypes={
    input:PropTypes.object.isRequired,
    label:PropTypes.string.isRequired,
}

export default Input;
