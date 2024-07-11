import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router} from "react-router-dom"
import NavBar from './components/NavBar'
import AppRoutes from './components/AppRoutes'

function App() {
  return (
    <Router>
      <div className='app'>
        <h1>REACT-RAILS APP</h1>
        <NavBar/>
        <AppRoutes/>
      </div>
    </Router>
  )
}

export default App
