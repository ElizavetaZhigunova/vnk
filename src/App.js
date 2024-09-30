import React, { useState } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';

const App = () => {
  const [Page, setPage] = useState("MainPage"); // Corrected useState

  function SwapPage(newPage) {
    setPage(newPage); // Корректная установка новой страницы
    window.scrollTo(0, 0); // Прокрутка страницы в самый верх
  }

  return (
    <div className='full'>
      <Header SwapPage={SwapPage}/>
      <Main Page={Page}/>
      {/* <Footer /> */}
      {/* Conditionally render Footer based on Page state */}
      {Page !== "MainPage" && <Footer />}
    </div>
  );
};

export default App;
