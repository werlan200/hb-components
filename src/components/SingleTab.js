import React from "react";

const SingleTab = (props) => {
  const { title, bubbleNumber, isActive, onClick, fluid, disabled } = props;

  return (
    <button
      onClick={onClick}
      className={fluid ? "singleTabWrapper fluid" : "singleTabWrapper"}
      disabled={disabled}
    >
      <div className="singleTabContent">
        <p
          className={isActive ? "singleTabTitle activeTitle" : "singleTabTitle"}
        >
          {title || "Tab"}
        </p>
        {bubbleNumber !== undefined ? (
          <span className="singleTabBubble">{bubbleNumber}</span>
        ) : null}
      </div>
      {isActive && <div className="singleTabActiveLine"></div>}
    </button>
  );
};

export default SingleTab;
