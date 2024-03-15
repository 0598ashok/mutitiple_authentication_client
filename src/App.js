import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import JavaScript from "./JavaScript/JavaScript";
import Reacts from "./React/Reacts";
import Node from "./Node/Node";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/react" element={<Reacts />} />
          <Route path="/node" element={<Node />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
