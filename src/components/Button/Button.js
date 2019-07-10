import React from "react";
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const sizeMap = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg
}

const typeMap = {
  border: styles.border,
  expand: styles.expand
}

const Button = ({size, type}) => {
  let buttonClassName = [typeMap[type], sizeMap[size], styles.btn].join(' ');
  return (
    <button className={buttonClassName}> Submit </button>
  )
}

Button.propType = {
  type: PropTypes.oneOf(['border', 'expand']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.string
}

export default Button;