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

// Card.propType = {
//   type: PropTypes.oneOf(['border', 'expand']),
//   size: PropTypes.oneOf(['sm', 'md', 'lg']),
//   color: PropTypes.string
// }

export default Card;