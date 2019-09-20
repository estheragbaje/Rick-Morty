import React from "react";

function Text(props) {
  const { children, ...rest } = props;

  return <p {...rest}>{children} </p>;
}

export default Text;
