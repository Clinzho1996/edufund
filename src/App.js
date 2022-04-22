import React from "react";
import {Header} from "./components/common"
import './App.css';
import {Home} from "./components/common";
import {Swapdata} from "./components/common";
import {Footer} from "./components/common";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {About} from "./components/common";
import {Pricing} from "./components/common";
import {Solution} from "./components/common";
import {CustomData} from "./components/common";
import {Contact} from "./components/common";
import {Faq} from "./components/common";
import {Blog} from "./components/common";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
        <div className='App-header'>
           <Header />
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/swapdata" exact element={<Swapdata />} />
                <Route path="/custom-data" exact element={<CustomData />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/pricing" exact element={<Pricing />} />
                <Route path="/solution" exact element={<Solution />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/faq" exact element={<Faq />} />
                <Route path="/blog" exact element={<Blog />} />
              </Routes>
           <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
