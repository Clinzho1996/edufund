<<<<<<< HEAD
import React from "react";
import { Home, Footer, About, Header, Pricing, Contact, StartCampaign } from "./components/common";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App-header">
        <Header />
        <Routes>
          <Route path="/" exact="true" element={<Home />} />
          <Route path="/about" exact="true" element={<About />} />
          <Route path="/pricing" exact="true" element={<Pricing />} />
          <Route path="/contact" exact="true" element={<Contact />} />
          <Route path="/startcampaign" exact="true" element={<StartCampaign />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
=======
import React from "react";
import {Header} from "./components/common"
import './App.css';
import {Home} from "./components/common";
import {Footer} from "./components/common";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {About} from "./components/common";
import {Pricing} from "./components/common";
import {Contact} from "./components/common";
import ScrollToTop from "./components/ScrollToTop";
import { Details } from "./components/common";



function App() {
  return (
      <BrowserRouter>
      <ScrollToTop />
        <div className='App-header'>
           <Header />
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/pricing" exact element={<Pricing />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/details" exact element={<Details />} />
              </Routes>
           <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
>>>>>>> 0cdd4486995db036177bd3d36e32fa66b782497c
