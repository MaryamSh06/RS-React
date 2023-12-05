import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/homePage";
import MainLayout from "./Components/Layout/MainLayout";
function App() {
  return (
   <>
     
     <BrowserRouter>

       <MainLayout />
      </BrowserRouter>
    
  </>
  );
}

export default App;
