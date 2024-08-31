import React from "react";
import {ConfigProvider} from "antd";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => (
  <ConfigProvider theme={{token: {colorPrimary: "#296efa"}}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </ConfigProvider>
);

export default App;
