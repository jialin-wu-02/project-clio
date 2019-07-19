import React from "react";
import PropTypes from 'prop-types';
import Radium from 'radium';

import styles from './Button.module.css';

const Button = ({color, size, type, content}) => {

  // initialize default color.
  color = color || "#eeeeee";

  // assign different styles according to different types of buttons.
  var colored = {};
  if (!type || type === "expand") {
    colored = {
      backgroundColor: color,
      color: color == "#eeeeee" ? "#484848" : "white" // checking the font color.
    }
  } else {
    colored = {
      backgroundColor: "transparent",
      border: "2px solid " + color,
      color: color
    }
  }

  // border style, need to do it inline to dynamically change bgc.
  var additionalHoverStyles = {
    border: {
      ":hover": {
        backgroundColor: color,
        color: color == "#eeeeee" ? "#484848" : "white" 
      }
    }
  }

  let buttonClassName = [styles["btn"], styles[size], styles[type]].join(' ');
  return (
    <button 
    style={[type=="border" ? additionalHoverStyles.border : null, colored]} 
    className={buttonClassName}> {content} </button>
  )
}

export default Radium(Button);