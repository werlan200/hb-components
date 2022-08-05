import React from "react";
import "./sass/styles.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  ButtonPage,
  SegmentPage,
  SharedLayout,
  TabPage,
  ToastPage,
  TextInputPage,
  DrawerPage,
  SelectInputPage,
  TablePage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ButtonPage />} />
          <Route index path="tab" element={<TabPage />} />
          <Route index path="segment" element={<SegmentPage />} />
          <Route index path="toast" element={<ToastPage />} />
          <Route index path="text-input" element={<TextInputPage />} />
          <Route index path="drawer" element={<DrawerPage />} />
          <Route index path="select-input" element={<SelectInputPage />} />
          <Route index path="table" element={<TablePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
