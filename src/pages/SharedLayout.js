import React, { useState } from "react";
import SingleTab from "../components/SingleTab";
import { useGeneralContext } from "../context";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SharedLayout = () => {
  const navigate = useNavigate();
  const { routes } = useGeneralContext();
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleRouting = (routeName) => {
    setActiveTabIndex(routes.indexOf(routeName));
    if (routeName === "button") {
      navigate("/");
      return;
    }
    navigate(routeName);
  };

  return (
    <div className="App">
      <header className="App-header">
        {routes.map((route, index) => {
          return (
            <SingleTab
              key={index}
              onClick={() => handleRouting(route)}
              fluid
              isActive={activeTabIndex === index}
              title={route}
            />
          );
        })}
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
