import React, { useRef, useLayoutEffect, useState } from "react";
import { ReactComponent as Cross } from "../assets/cross.svg";
import { ReactComponent as ErrorIcon } from "../assets/toastError.svg";
import { ReactComponent as InfoIcon } from "../assets/toastInfo.svg";
import { ReactComponent as WarningIcon } from "../assets/toastWarning.svg";
import { ReactComponent as SuccessIcon } from "../assets/toastSuccess.svg";
import Button from "./Button/Button";

const svgMap = {
  error: <ErrorIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
  success: <SuccessIcon />,
};

const Toast = (props) => {
  const { className, title, description, linkCallback, linkTitle } = props;
  const toastRef = useRef(null);
  const [show, setShow] = useState(true);

  // multiple toast placement & animation duration
  useLayoutEffect(() => {
    const toastStyle = toastRef.current.style;
    const toasts = document.querySelectorAll(".toast");
    const numberOfToasts = toasts.length;

    if (numberOfToasts > 1) {
      if (window.innerWidth >= 700) {
        //desktop
        const height = toastRef.current.offsetHeight;
        toasts.forEach((ele, index) => {
          if (index !== numberOfToasts - 1) {
            ele.style.top = ele.offsetTop + height + 10 + "px";
          }
        });
      } else {
        //mobile
        toastStyle.marginTop = (numberOfToasts - 1) * 5 + "px";
      }
    }

    if (description || linkCallback) {
      toastStyle.animationDuration = "7s";
    } else {
      toastStyle.animationDuration = "3s";
    }
  }, []);

  const handleIcon = () => {
    const toastTypeFromClassName = className
      .trim()
      .split(" ")
      .find((str) => {
        return Object.keys(svgMap).includes(str);
      });
    if (toastTypeFromClassName) return svgMap[toastTypeFromClassName];
    return null;
  };

  return (
    show && (
      <div
        className={className}
        ref={toastRef}
        onAnimationEnd={() => setShow(false)}
      >
        <div className="content">
          <div className="contentHeader">
            <span>{handleIcon()}</span>
            <h6>{title || "Error Title lorem ip dum dolor sir amet csu"}</h6>
            <span onClick={() => setShow(false)}>
              <Cross />
            </span>
          </div>
          {description && (
            <div className="contentDescription">
              <div></div>
              <p>{description}</p>
              <div></div>
            </div>
          )}
          {linkCallback && (
            <div className="contentDescription">
              <div></div>
              <Button
                className={"btn tiny link-primary"}
                buttonText={linkTitle || "Link here"}
                type="button"
                onClick={linkCallback}
              />
              <div></div>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Toast;
