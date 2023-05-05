import React from "react";
import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SongDetail from "./components/SongDetail/SongDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import SearchedSongDetail from './components/SearchedSongDetail/SearchedSongDetail';


function App() {
 
  return (


    <div className="App">

<BrowserRouter > 
  <Header/>
  <div className="container">
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/song/:songID' element={<SongDetail/>} />
    <Route path='/searchedsong/:songID' element={<SearchedSongDetail/>} />
    <Route  element={<PageNotFound/>} />
  </Routes>
  </div>
  <Footer/>
</BrowserRouter>,
     
    </div>
  );
}
    

export default App;
