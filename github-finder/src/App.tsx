import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main>
          <h1 className='mx-auto'>Github Finder App</h1>
        </main>
      </div>
    </Router>
  );
}

export default App;
