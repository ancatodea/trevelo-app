import { Route, Routes } from 'react-router-dom';
import './App.css';
import Explore from './pages/Explore';
import Homepage from './pages/Homepage';
import Favourites from "./pages/Favourites";
import Article from "./pages/Article";

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="explore" element={<Explore />} />
              <Route path="favourites" element={<Favourites />} />
              <Route path='article' element={<Article />} />
          </Routes>
      </div>
  );
}

export default App;


// Raluca - explore page
// Vlad - article page
// Anca - favourites page
// Teodor - Post page

// ramanem cu paginile initiale de terminat 
// NavLink active page... research
// User profile picture NavBar border-radius?