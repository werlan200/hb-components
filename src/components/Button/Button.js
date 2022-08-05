import React from "react";

const Button = (props) => {
  const {
    className,
    buttonText,
    leftIcon,
    rightIcon,
    newLeftIcon,
    ...btnProps
  } = props;

  return (
    <button className={className} {...btnProps}>
      {leftIcon && leftIcon}
      {buttonText}
      {rightIcon && rightIcon}
    </button>
  );
};

export default Button;
