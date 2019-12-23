import React from "react";
import "./App.css";
import { Situation, size, status } from "./pages/situation";

function App() {
  return <Situation size={size.large} status={status.aprovado}></Situation>;
}

export default App;
