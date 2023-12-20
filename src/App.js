import "./App.css";
import {  HashRouter } from "react-router-dom";
import AppRoutes from "./Components/Layout/AppRoutes";
function App() {
  return (
   <>
     <HashRouter>
       <AppRoutes />
      </HashRouter>
  </>
  );
}

export default App;
