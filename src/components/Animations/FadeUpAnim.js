import React from 'react'
import classes from './FadeUpAnim.module.css'

const FadeUpAnim = (props) => {
  const myStyle = {
    animationDelay: `${props.index * 0.1 + 0.7}s`,
  };

  return (
    <div className={classes.anim} style={myStyle}>
      {props.children}
    </div>
  );
}

export default FadeUpAnim