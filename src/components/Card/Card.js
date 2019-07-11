import React from "react";
import PropTypes from 'prop-types';

import styles from './Card.module.css';
import CardHead from './CardHead';
import CardBody from './CardBody';


// Card -> Card Head -> Card Body -> Card Footer

const Card = (props) => {
  return (
    <div className={styles.Card}> 
        {props.children}
    </div>
  )
}

// Card.propType = {
//   type: PropTypes.oneOf(['border', 'expand']),
//   size: PropTypes.oneOf(['sm', 'md', 'lg']),
//   color: PropTypes.string
// }

export default Card;