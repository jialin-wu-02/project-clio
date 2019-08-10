import React from "react";
import PropTypes from 'prop-types';
import HoverCardFront from './HoverCardFront';
import HoverCardBack from './HoverCardBack';

import styles from './HoverCard.module.css';

const HoverCard = (props) => {
  return (
    <div style={props.style} className={styles.HoverCard}> 
        {props.children}
    </div>
  )
}


HoverCard.Front = HoverCardFront;
HoverCard.Back = HoverCardBack;

export default HoverCard;