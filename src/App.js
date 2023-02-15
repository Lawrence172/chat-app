import React from "react";
import Homepage from "./Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Component/Signup/Signup";
import Signin from "./Component/Signin/Signin";

function App() {
  return (
    // <Homepage />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={<Signin />} />
    </Routes>
  </BrowserRouter>
  )
}
export default App;
