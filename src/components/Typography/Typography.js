import React from "react";
import PropTypes from 'prop-types';

import styles from './Typography.module.css';

const H1 = (props) => {
  return (
    <h1 style={props.style} className={styles.H1}> 
        {props.children}
    </h1>
  )
}

const H2 = (props) => {
  return (
    <h2 style={props.style} className={styles.H2}> 
        {props.children}
    </h2>
  )
}

const H3 = (props) => {
  return (
    <h3 style={props.style} className={styles.H3}> 
        {props.children}
    </h3>
  )
}

// regular fonts
const R = (props) => {
  return (
    <p style={props.style} className={styles.R}> 
        {props.children}
    </p>
  )
}

// Bold fonts
const B = (props) => {
  return (
    <p style={props.style} className={styles.B}> 
        {props.children}
    </p>
  )
}

// small fonts
const S = (props) => {
  return (
    <p style={props.style} className={styles.S}> 
        {props.children}
    </p>
  )
}


// Card.propType = {
//   type: PropTypes.oneOf(['border', 'expand']),
//   size: PropTypes.oneOf(['sm', 'md', 'lg']),
//   color: PropTypes.string
// }

export { H1, H2, H3, B, R, S };