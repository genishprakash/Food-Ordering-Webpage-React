import styles from './MealsForm.module.css'
import Input from '../Input/Input'
import PropTypes from 'prop-types'
const MealsForm =(props)=>{
    return(
        <form className={styles.forms}>  
            <Input label='Amount' input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }}></Input>
            <button>+ Add</button>
        </form>
    )
}
MealsForm.propTypes={
    id:PropTypes.string.isRequired,
}

export default MealsForm