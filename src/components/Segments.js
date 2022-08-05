import React, { useRef, useLayoutEffect, useState } from "react";
import SingleSegment from "./SingleSegment";

//size can be "small"
const Segments = (props) => {
  const { size, data, fluid } = props;
  const segmentWrapper = useRef(null);
  const animationContainer = useRef(null);
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);

  useLayoutEffect(() => {
    const activeElement = [...segmentWrapper.current.children].find((element) =>
      element.className.includes("singleSegmentWrapper active")
    );
    const activeElementWidth = activeElement.offsetWidth;
    const activeElementLeft = activeElement.offsetLeft;
    animationContainer.current.style.left = activeElementLeft + "px";
    animationContainer.current.style.width = activeElementWidth + "px";
  });

  const classNameHandler = () => {
    let baseName = "segmentsWrapper";
    if (fluid) baseName += " fluid";
    if (size) baseName += " " + size;
    return baseName;
  };
  return (
    <div className={classNameHandler()} ref={segmentWrapper}>
      {data.map((item, index) => {
        return (
          <SingleSegment
            onClick={() => setActiveSegmentIndex(index)}
            isActive={index === activeSegmentIndex}
            key={index}
            title={item.title}
          />
        );
      })}
      <div className="activeSegment" ref={animationContainer}></div>
    </div>
  );
};

export default Segments;
