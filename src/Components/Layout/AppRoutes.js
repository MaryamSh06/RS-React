import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../homePage";
import Test from "../Test";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
