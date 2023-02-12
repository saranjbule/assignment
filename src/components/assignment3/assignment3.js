import Component1 from "./component1";
import Component2 from "./component2";
import Component3 from "./component3";
import Home from "./home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Assignment3() {
  return (
    <>
      <h1>Assignment 3</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="component1" element={<Component1 />} />
          <Route path="component2" element={<Component2 />} />
          <Route path="component3" element={<Component3 />} />
          <Route path="*" element={<Component3 />} />
        </Routes>
      </BrowserRouter>
      <Home />
    </>
  );
}

export default Assignment3;
