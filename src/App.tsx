import React from "react";

//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Billy from "./components/Billy";

//Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

//styles
import { GlobalStyle } from "./GlobalStyle";

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/Billy" element={<Billy />} />
    </Routes>

    <GlobalStyle />
  </Router>
);

export default App;
