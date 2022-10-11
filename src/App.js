import ToggleLike from "./components/ToggleLike";
import React from "react";
import Reply from "./components/Reply";

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <ToggleLike />
      <Reply />
    </div>
  );
}

export default App;
