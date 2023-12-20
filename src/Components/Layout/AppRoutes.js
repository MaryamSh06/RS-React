import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../LandingPages/LandPage";
import MainLayout from "./MainLayout";

const AppRoutes = () => {
  return (
    <>
       <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<MainLayout />} />
    </Routes>
    </>
  );
};

export default AppRoutes;
