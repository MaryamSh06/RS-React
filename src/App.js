import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Components/Layout/AppRoutes";
function App() {
  return (
   <>
     
     <BrowserRouter>

       <AppRoutes />
      </BrowserRouter>
    
  </>
  );
}

export default App;
