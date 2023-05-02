import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import NotFound from "../components/NotFound";

let Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
  );
};

export default Navigation;
