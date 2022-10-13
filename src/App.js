import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Title from "./components/Title";
import WordCloudPage from "./pages/WordCloudPage";
import ComparedWordCloudPage from "./pages/ComparedWordCloudPage";
import Bills from "./pages/Bills";

function App() {
  return (
    <>
      <BrowserRouter>
        <Title />
        <Routes>
          <Route path="/" element={<WordCloudPage />} />
          <Route path="/main" element={<WordCloudPage />} />
          <Route path="/compare" element={<ComparedWordCloudPage />} />
          <Route path="/bills" element={<Bills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
