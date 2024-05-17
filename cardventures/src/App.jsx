import { Outlet } from "react-router-dom";
import AppProvider from "./AppProvider";
import "./App.css";

function App() {
    return (
        <AppProvider>
            <Outlet />
        </AppProvider>
    );
}

export default App;
