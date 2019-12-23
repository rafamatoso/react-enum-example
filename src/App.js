import React from "react";
import "./App.css";
import Situation from "./pages/situation";

function App() {
  return (
    <Situation
      size={Situation.size.large}
      status={Situation.status.aprovado}
    ></Situation>
  );
}

export default App;
