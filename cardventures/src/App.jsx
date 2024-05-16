import { Outlet } from "react-router-dom";
import "./App.css";
import TextContext from "./context/Context";
import { useState } from "react";

function App() {
  const [messageContext, setMessageContext] = useState("ici msg")
  console.log(messageContext)
  return (
    <TextContext.Provider
    value={{
      messageContext: messageContext,
      setMessageContext: setMessageContext,
    }}
    >
      <Outlet />
    </TextContext.Provider>

  );
}

export default App;
