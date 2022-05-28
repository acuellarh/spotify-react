import React from 'react'
import './App.css';
import { ArtistsContextProvider } from './context/ArtistsContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AlbumPage from './components/AlbumPage'
import { Navbar } from './components/Navbar';
import { Pagination } from './components/Pagination';
import { Home } from './pages/Home';


function App() {  
  return (
    <ArtistsContextProvider>
      <Navbar/>
      {/* <Pagination/> */}
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          {/* <Route path="/albums" element={<AlbumPage />}/>
         */}

        </Routes>
      </BrowserRouter>      
    </ArtistsContextProvider>
  );
}

export default App;
