import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../homePage";
import NewConnectionModal from "../Modals/NewConnectionModal/NewConnectionModal";
import TestModalConnection from "../Modals/TestModalConnection";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connection" element={<NewConnectionModal />} />
        <Route path="/connectiontest" element={<TestModalConnection />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
