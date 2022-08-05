import React, { useContext, useEffect, useState } from "react";
import { sampleData, router } from "./sampleDatas";
const GeneralContext = React.createContext();

export const GeneralProvider = ({ children }) => {
  const [data, setData] = useState(sampleData);
  const [routes, setRoutes] = useState(router);
  return (
    <GeneralContext.Provider
      value={{
        data,
        routes,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  return useContext(GeneralContext);
};
