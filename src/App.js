import React from 'react'
import './App.css';
import { ArtistsContextProvider } from './context/ArtistsContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Search } from './components/Search';
import AlbumPage from './components/AlbumPage'
import { Navbar } from './components/Navbar';
import { Pagination } from './components/Pagination';


function App() {  
  return (
    <ArtistsContextProvider>
      <Navbar/>
      {/* <Pagination/> */}
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Search />}/>
          <Route path="/albums" element={<AlbumPage />}/>
        
        </Routes>
      </BrowserRouter>      
    </ArtistsContextProvider>
  );
}

export default App;
