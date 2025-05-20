import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Collaborators from './pages/Collaborators.jsx';
import Research from './pages/Research';
import Opportunities from './pages/Opportunities';
import Telemedicine from './pages/Telemedicine';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="collaborators" element={<Collaborators />} />
            <Route path="research" element={<Research />} />
            <Route path="opportunities" element={<Opportunities />} />
            <Route path="telemedicine" element={<Telemedicine />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;

  