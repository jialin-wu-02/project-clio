import React from "react";
import PropTypes from 'prop-types';

import styles from './Image.module.css';

const Image = (props) => {
  if (!props.children) {
    return (
      <img style={props.style} className={styles.Image} src={props.src} alt={props.alt} style={{width: props.width}}/>
    )
  } else {
    return (
      <div style={props.style} className={styles.container} style={{width: props.width}}>
        <img className={styles.Image} src={props.src} alt={props.alt}/>
        <div className={styles.inner}>
          {props.children}
        </div>
      </div>
    )
  } 
}

export default Image;