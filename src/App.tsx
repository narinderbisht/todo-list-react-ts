import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TodoApp from './Pages/TodoApp'
import AutocompleteSearchbar from './Pages/AutocompleteSearchbar'
import Home from './Pages/Home'
import Header from './Components/CommonParts/Header'
import Footer from './Components/CommonParts/Footer'

const App = () => {
  return (
      <Router>
          <Header /> 
          <main className="w-full p-4 min-h-screen">
              <Routes>
                <Route path="/" element={<Home />} />
              <Route path="todo-app" element={<TodoApp />} />
              <Route path="search-app" element={<AutocompleteSearchbar />} />
            </Routes>
          </main>
          <Footer/>
      </Router>
  )
}

export default App