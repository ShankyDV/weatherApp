import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./components/HomePage/HomePage"
import CountryWeather from "./components/CountryWeather/CountryWeather";

function App() {

  return (
    <div className="App">
      <div className="heading">Weather App By Deepanshu Varun</div>

      <Router>
      
    
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>    
        <Route exact path="/CountryWeather" element={<CountryWeather/>}/>

      </Routes>
    
  </Router>
        </div>
  );
}

export default App;
