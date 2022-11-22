
import './App.css';
import Google from "./components/Google";
import { Routes,Route } from 'react-router-dom';
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path='/' element={<Google/>} />
        <Route path='/searchresults' element={<SearchResults/>} />
      </Routes>
     
    </div>
  );
}

export default App;
