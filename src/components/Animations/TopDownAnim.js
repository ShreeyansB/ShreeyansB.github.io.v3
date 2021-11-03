import React from "react";
import classes from "./TopDownAnim.module.css";

const TopDownAnim = (props) => {
  const myStyle = {
    animationDelay: `${props.index * 0.05}s`,
  };

  return (
    <div className={classes.anim} style={myStyle}>
      {props.children}
    </div>
  );
};

export default TopDownAnim;
