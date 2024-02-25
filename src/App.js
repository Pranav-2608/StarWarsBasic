import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonPage from './components/PersonPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    
      <div className="App">
      <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/person/:personId" element={<PersonPage />} />
        </Routes>
      </div>
 
  );
}

export default App;
