import React from "react";
import PropTypes from 'prop-types';

import styles from './FCFront.module.css'

const FCFront = (props) => {
  return (
    <div className={styles.Front}>
        {props.children}
    </div>
  )
}

export default FCFront;