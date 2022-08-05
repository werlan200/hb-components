import React, { useState } from "react";
import Toast from "../components/Toast";
const ToastPage = () => {
  const [toastArr, setToastArr] = useState([]);
  const createToast = () => {
    setToastArr((prev) => {
      return [
        ...prev,
        <Toast
          className={"toast info"}
          title={""}
          description={"meraba"}
          linkCallback={() => {
            console.log("cb");
          }}
        />,
      ];
    });
  };
  return (
    <div>
      <button type="button" onClick={() => createToast()}>
        create Toast
      </button>

      {toastArr &&
        toastArr.map((ele) => {
          return ele;
        })}
    </div>
  );
};

export default ToastPage;
