import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AppProvider from "./AppProvider";
import "./App.css";

function App() {

  // const location = useLocation();

  return (
    <AppProvider >
        <Outlet />
    </AppProvider>
  );
}

export default App;
