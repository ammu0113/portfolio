import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import "./styles/index.scss";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
// import Hero from "./components/Hero";
import About from "./components/About";
import HeroPage from "./components/Hero";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <Router>
        <div style={{ height: "5vh" }}>
          <Header />
        </div>
        <div style={{ height: "95vh" }}>
          <Routes>
            {/* <Route exact path="/portfolio" Component={Portfolio} /> */}
            <Route exact path="/" element={<HeroPage />} />
            {/* <Route exact path="/about" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        */}
          </Routes>
        </div>
      </Router>
      {/* <App /> */}
    </AppContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
