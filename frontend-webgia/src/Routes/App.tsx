// App.tsx
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//COMPONENTS IMPORTATION
import Home from "../components/home";
import NLP from "../components/NLP";
import ImgProcess from "../components/imgProcess";
import LLM from "../components/LLM";
import Community from "../components/community";
import Login from "../components/login";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NLP" element={<NLP />} />
        <Route path="/img-processing" element={<ImgProcess />} />
        <Route path="/LLM" element={<LLM />} />
        <Route path="/comunity" element={<Community />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;