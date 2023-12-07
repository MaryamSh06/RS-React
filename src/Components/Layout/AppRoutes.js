import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../homePage";
import Test from "../Test";
import NewConnectionModal from "../Modals/NewConnectionModal/NewConnectionModal";
import TestModalConnection from "../Modals/TestModalConnection";


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/test" element={<Test />} />
         <Route path="/connection" element={<NewConnectionModal />} />
         <Route path="/connectiontest" element={<TestModalConnection />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
