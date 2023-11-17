import { Route, Routes } from 'react-router-dom';
import './App.css';
import Explore from './pages/Explore';
import Homepage from './pages/Homepage';

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="explore" element={<Explore />} />
          </Routes>
      </div>
  );
}

export default App;


// Raluca - explore page
// Vlad - article page
// Anca - favourites page
// Teodor - Post page