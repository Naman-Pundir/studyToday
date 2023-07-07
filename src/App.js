import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Landing from "./Landing";
import Studentlogin from "./Studentlogin";
import Studentregister from "./Studentregister";
import Instructorlogin from "./Instructorlogin";
import Instructorregister from "./Instructorregister";
import Courses from "./Courses";
import Subscribe from "./Subscribe";
import Dashboard from "./Dashboard";
import Instructordashboard from "./Instructordashboard";

const App = () => {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />        
        <Routes>
          <Route path="/Home" element = {<Home/>} />
          <Route path="/" element = { <Landing/> } />
          <Route path="/Studentlogin" element = { <Studentlogin/>} />
          <Route path="/Studentregister" element = { <Studentregister/> } />
          <Route path="/Instructorlogin" element = { <Instructorlogin/>} />
          <Route path="/Instructorregister" element = { <Instructorregister/> } />
          <Route path="/Courses" element = { <Courses />} />
          <Route path="/Subscribe" element = { <Subscribe /> } />
          <Route path="/Dashboard" element = { <Dashboard/> } />
          <Route path="/Instructordashboard" element = { <Instructordashboard/> } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
