import { useState } from "react";
import "./App.css";
import { C1 } from "./Comp1";

function App() {
  const [state, setState] = useState(true);
  return (
    <>
      <C1 title={state} setter={setState} />
    </>
  );
}

export default App;
