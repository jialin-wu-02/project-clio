import React from "react";

import styles from './Checkbox.module.css';

const Checkbox = (props) => {
    return (
        <div className={styles.Checkbox}>
            <input 
            type="checkbox" {...props.label} /> 
               
        </div>
    )
}

export default Checkbox;