import React from "react";
import PropTypes from 'prop-types';

import styles from './HoverCard.module.css';

const HoverCardFront = (props) => {
  return (
    <div style={props.style} className={styles.HoverCardFront}> 
        {props.children}
    </div>
  )
}



export default HoverCardFront;