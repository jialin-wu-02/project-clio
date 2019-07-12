import React from "react";
import PropTypes from 'prop-types';

import styles from './FlipCard.module.css';

import Card from '../Card/Card.js';
import FCFront from './FCFront';
import FCBack from './FCBack';
// Card -> Card Head -> Card Body -> Card Footer

const FlipCard = (props) => {
  return (
    <div className={styles.FlipCard}>
      <div className={styles.FlipCardInner}>
        <Card>
          {props.children}
        </Card>
      </div>
    </div>
  )
}

FlipCard.Front = FCFront;
FlipCard.Back = FCBack; 

export default FlipCard;