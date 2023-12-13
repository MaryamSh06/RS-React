import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../homePage";
import { LandingPage } from "../LandingPages/LandPage";
import MainLayout from "./MainLayout";

const AppRoutes = () => {
  return (
    <>
       <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<MainLayout />}>
      </Route>
    </Routes>
    </>
  );
};

export default AppRoutes;
