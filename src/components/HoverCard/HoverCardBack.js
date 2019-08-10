import React from "react";
import PropTypes from 'prop-types';

import styles from './HoverCard.module.css';

const HoverCardBack = (props) => {
  return (
    <div style={props.style} className={styles.HoverCardBack}> 
        {props.children}
    </div>
  )
}



export default HoverCardBack;