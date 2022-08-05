import React, { useState } from "react";
import SingleTab from "./SingleTab";

const Tabs = (props) => {
  const { data, fluid, initialIndex = 0 } = props;
  const [activeTabIndex, setActiveTabIndex] = useState(initialIndex);

  return (
    <div className="tabWrapper">
      {data.map((item, index) => {
        return (
          <SingleTab
            key={index}
            onClick={() => setActiveTabIndex(index)}
            fluid={fluid}
            isActive={activeTabIndex === index}
            title={item.title}
            bubbleNumber={item.bubbleNumber}
          />
        );
      })}
    </div>
  );
};

export default Tabs;
