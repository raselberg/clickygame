  
import React from "react";
import "./counter.css";
// import Arrow from 'react-icons/lib/fa/caret-right';

//stateless component
const counter = props => (
  <div className="gameScore">
    <h3 className="score">Your Score  {props.total}</h3>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default counter;

{/* <Arrow /> */}