import React from "react";
import Segments from "../components/Segments";
import { useGeneralContext } from "../context";

const SegmentPage = () => {
  const { data } = useGeneralContext();

  return (
    <div className="segmentPageWrapper">
      <ul className="seg-fluid">
        <li>
          <Segments data={data} fluid />
        </li>
        <li>
          <Segments data={data} fluid size={"small"} />
        </li>
      </ul>
      <ul className="seg-normal">
        <li>
          <Segments data={data} />
        </li>
        <li>
          <Segments data={data} size={"small"} />
        </li>
      </ul>
    </div>
  );
};

export default SegmentPage;
