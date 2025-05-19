import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="container">
      <header className='navbar'>
        <nav>
          <h1>Doctors on Wheels</h1>
          <a href="#about">About Us</a>
          <a href="#collab">Collaborators</a>
          <a href="#research">Research</a>
          <a href="#opps">Opportunities</a>
          <a href="#telemed">Telemedicine</a>
          <a href="https://downepal.blogspot.com/?fbclid=IwY2xjawKYfKpleHRuA2FlbQIxMABicmlkETFRUkpaM1ZNZ3NVV1phZWhBAR5kI8OxCkibykBP_owMG5b7zHcl_PYSJOdEG7Wl7WQd0L3ZwwDFvm9cY1SoNA_aem_GFbb6Y8DqPxQs3xklEoK4A" 
          target="_blank" rel="noopener noreferrer">Our Blog</a>
        </nav>
      </header>

      <footer>
        <p>&copy; {new Date().getFullYear()} Doctors on Wheels</p>
      </footer>
    </div>
  )
}

export default App
