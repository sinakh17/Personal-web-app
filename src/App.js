import { Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./pages/Main";
import Services from "./pages/Services";
import Samples from "./pages/Samples";
import CV from "./pages/CV";
import Rules from "./pages/Rules";
import NotFound from "./pages/NotFound";
import classes from "./App.module.css";
import ContactMe from "./pages/ContactMe";
import Info from "./pages/Info";
import { useState } from "react";
import Sidebar from "./pages/sidebar";

function App() {
  const isMobile = window.innerWidth < 500;
  return (
    <div className={classes.container} id="outer-container">
      {isMobile && (
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          right
        />
      )}
      {!isMobile && <Navigation />}
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/main" replace id="page-wrap" />}
        />
        <Route path="/main" element={<Main />} />
        <Route path="/services" element={<Services />} />
        <Route path="/samples" element={<Samples />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
