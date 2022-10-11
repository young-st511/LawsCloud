import ToggleLike from "./components/ToggleLike";
import React from "react";
import Reply from "./components/Reply";
import GlobalStyle from "./style/GlobalStyles";
import ReplyList from "./components/ReplyList";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <ToggleLike />
        <ReplyList />
        <Reply />
      </div>
    </>
  );
}

export default App;
