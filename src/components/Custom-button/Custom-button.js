import React from "react";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button type="button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;