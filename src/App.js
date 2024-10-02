import React, { useState } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.js";

const App = () => {
  const [Page, setPage] = useState("MainPage"); // Corrected useState

  function SwapPage(newPage) {
    setPage(newPage); // Корректная установка новой страницы
    window.scrollTo(0, 0); // Прокрутка страницы в самый верх
  }

  return (
    <BrowserRouter>
      <div className="full">
        <Header SwapPage={SwapPage} />
        {/* <Main Page={Page} /> */}
        <AppRoutes />
        {/* <Footer /> */}
        {/* Conditionally render Footer based on Page state */}
        {Page !== "MainPage" && <Footer />}
      </div>
    </BrowserRouter>
  );
};

export default App;
