import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

// import various route components (web pages)
import Home from './routes/Home'
import AllHeroes from './routes/Movies'
import Search from './routes/Search'

// import components
import Navbar from './components/Navbar' 

export default function App() {
  return (
    <Router>
        <Navbar />  
        <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/movies'} element={<AllHeroes />}/>
            <Route path={'/search'} element={<Search />}/>
        </Routes>
    </Router>
  )
}
    
        


