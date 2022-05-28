import React from 'react'
import './App.css';
import { ArtistsContextProvider } from './context/ArtistsContext';



import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import { Route, Routes } from 'react-router-dom';


function App() {  
  return (
    <ArtistsContextProvider>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Search/>}/>
        </Routes>         
    </ArtistsContextProvider>
  );
}

export default App;
