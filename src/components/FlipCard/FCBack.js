import React from "react";
import PropTypes from 'prop-types';

import styles from './FCBack.module.css'

const FCBack = (props) => {
  return (
    <div className={styles.Back}>
        {props.children}
    </div>
  )
}

export default FCBack;