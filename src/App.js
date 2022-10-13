import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Reply from "./components/Reply";

import Bills from "./pages/Bills";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Header />}  Header 라우트 */}
          <Route path="/bills" element={<Bills />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
      <Reply />
    </>
  );
}

export default App;
