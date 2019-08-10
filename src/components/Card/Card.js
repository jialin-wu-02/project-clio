import React from "react";
import PropTypes from 'prop-types';

import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div style={props.style} className={styles.Card}> 
        {props.children}
    </div>
  )
}

export default Card;