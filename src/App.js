import ToggleLike from "./components/ToggleLike";
import React from "react";
import Reply from "./components/Reply";
import GlobalStyle from "./style/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <ToggleLike />
        <Reply />
      </div>
    </>
  );
}

export default App;
