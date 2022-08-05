import React from "react";

const SingleSegment = (props) => {
  const { title, onClick, isActive } = props;

  return (
    <button
      className={
        isActive ? "singleSegmentWrapper active" : "singleSegmentWrapper"
      }
      onClick={onClick}
    >
      {title || "Segment"}
    </button>
  );
};

export default SingleSegment;
