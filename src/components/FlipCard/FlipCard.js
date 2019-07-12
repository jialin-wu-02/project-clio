import React from "react";
import PropTypes from 'prop-types';

import Card from '../Card/Card.js';
// Card -> Card Head -> Card Body -> Card Footer

const FlipCard = (props) => {
  return (
    <div>
        <Card>
        <p>Flipcard</p>
            {props.children}
        </Card>
    </div>
  )
}

export default FlipCard;