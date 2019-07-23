import React from "react";

import styles from './Checkbox.module.css';

const Checkbox = (props) => {
    return (
        <div className={styles.Container}>
            <label>
                <input className={styles.Checkbox} type="checkbox" /> 
                <span> {props.label} </span>
            </label>
        </div>
    )
}

export default Checkbox;