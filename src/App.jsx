import { useState } from 'react'

import { DataProvider } from './context/Context'

import Data from './Components/Data'
import Detalle from './Components/Detalle'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* 
<Router>
<div className="sm:w-1/2 w-full m-auto">
  <div className=" sm:m-auto">
    <Routes>
      <Route
        path="/"
        exact
        element={
          <Menu
       */


function App() {

  return (
<DataProvider>
    <Router>

    <Routes>
    
    <Route
                path="/"
                exact
                element={
                  <Data/>
                  
                }
              />
              <Route
                path="/detailedDish"
                exact
                element={<Detalle/>}
              />
 
    </Routes>
    
    </Router>
    </DataProvider>
    
  )
}

export default App
