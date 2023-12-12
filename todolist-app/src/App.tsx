// src/App.tsx

// Import necessary modules and components
import React from 'react';
import './App.css';
import {Todo} from "./components/Todos"
import {Registration} from "./components/Register"
import {Login} from "./components/Login"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Navbar} from "./components/Nav"

// Define the main App component as a functional component
function App() {
  
  return <BrowserRouter>
    <Navbar/>
     <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Registration/>}/>
        <Route path='todos' element={<Todo/>}/>
     </Routes>
  </BrowserRouter>
  


}

// Export the App component as the default export of this module
export default App;
