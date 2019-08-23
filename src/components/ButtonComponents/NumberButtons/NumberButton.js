import React from "react";

const NumberButton = (props) => {
  const buttonValue = `number-button ${ props.name }`;

  return (
    <div className={ buttonValue } onClick={() => 
    props.handleClick(props.symbol)}>
      { props.symbol }
    </div>
  );
};

export default NumberButton;