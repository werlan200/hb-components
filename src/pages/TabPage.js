import React, { useEffect, useState } from "react";
import SingleTab from "../components/SingleTab";
import { useGeneralContext } from "../context";
const TabPage = () => {
  const { data, initialIndex = 0 } = useGeneralContext();
  const [activeTabIndex, setActiveTabIndex] = useState(initialIndex);

  const tryDisabled = (index) => {
    setActiveTabIndex(index);
    console.log("cb");
  };
  useEffect(() => {
    if (data[initialIndex].disabled) {
      const newNondisabledTabIndex = data.findIndex((item) => {
        if (item.disabled === undefined || item.disabled === false) return true;
      });
      setActiveTabIndex(newNondisabledTabIndex);
    }
  }, []);

  return (
    <div>
      <ul>
        <li>
          {data.map((item, index) => {
            return (
              <SingleTab
                key={index}
                onClick={() => tryDisabled(index)}
                isActive={activeTabIndex === index}
                title={item.title}
                bubbleNumber={item.bubbleNumber}
                disabled={item.disabled}
                fluid
              />
            );
          })}
        </li>
        <li>
          {data.map((item, index) => {
            return (
              <SingleTab
                key={index}
                onClick={() => tryDisabled(index)}
                isActive={activeTabIndex === index}
                title={item.title}
                bubbleNumber={item.bubbleNumber}
                disabled={item.disabled}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default TabPage;
