import React from 'react'
import './App.css';
import { ArtistsContextProvider } from './context/ArtistsContext';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import AlbumPage from './components/AlbumPage';

function App() {  
  return (
    <ArtistsContextProvider>
      <Navbar/>
        <Routes>       
          <Route path="/" element={<Home/>}/>
          <Route path="/albums" element={<AlbumPage/>}/>
        </Routes>         
    </ArtistsContextProvider>
  );
}

export default App;
