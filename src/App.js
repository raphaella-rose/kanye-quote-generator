import React, {useState} from "react";
import axios from "axios";
import ShowQuote from "./ShowQuote";
import './App.css';

function App() {
const [results, setResults] = useState("");
const handleResponse = (response) => {
setResults(response.data.quote);
}
const handleClick = (e) => {
e.preventDefault();
let apiUrl = "https://api.kanye.rest/";
axios.get(apiUrl).then(handleResponse);
}
  return (
    <div className="App">
    <h1>Kanye's Wisdom</h1>
    <button onClick={handleClick}>
    Get Inspired
    </button>
    <ShowQuote results={results} />
    </div>
  );
}

export default App;
