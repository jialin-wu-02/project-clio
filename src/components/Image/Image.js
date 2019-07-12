import React from "react";
import PropTypes from 'prop-types';

import styles from './Image.module.css';

const Image = (props) => {
  return (
    <img className={styles.Image} src={props.src} alt={props.alt} style={{width: props.width}}/>
  )
}

export default Image;