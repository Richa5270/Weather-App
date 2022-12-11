import './App.css';
import SearchWeather from './components/SearchWeather';
import {Routes, Route} from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<SearchWeather/>} />
      </Routes>
    </div>
  );
}

export default App;
