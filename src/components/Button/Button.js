import React from "react";
import PropTypes from 'prop-types';
import Radium from 'radium';

import styles from './Button.module.css';

const Button = ({color, size, type}) => {
  // initialize default color.
  color = color || "#eeeeee";
  // // assign different styles according to different types of buttons.
  let colored = {};
  if (!type || type === "expand") {
    colored = {
      backgroundColor: color,
      color: color == "rgb(0, 122, 255)" ? "white" : "black" // checking the font color.
    }
  } else {
    colored = {
      backgroundColor: "transparent",
      border: "2px solid " + color,
      color: color
    }
  }

  let buttonClassName = [styles["btn"], styles[size], styles[type]].join(' ');
  return (
    <button style={colored} className={buttonClassName}> Submit </button>
  )
}

// var styles = {
//   base: {
//     border: "none",
//     transition: "all .2s",
//     cursor: "pointer",
//     position: "relative",
//     ":focus": {
//       outline: "none"
//     },
//     ":hover": {
//       transform: "translateY(-8%)"
//     },
//     ":active": {
//       transform: "translateY(-2%)"
//     }
//   },
//   normal: {
//     ":hover": {
//       filter: "brightness(90%)",
//     },
//     ":active": {
//       filter: "brightness(80%)",
//     }
    
//   }
// }

Button.propType = {
  type: PropTypes.oneOf(['border', 'expand']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.string
}

export default Radium(Button);