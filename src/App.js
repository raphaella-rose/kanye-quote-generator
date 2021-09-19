import React, {useState} from "react";
import axios from "axios";
import ShowQuote from "./ShowQuote";

import kanye from "./kanye.png";
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
    <div className="button-wrapper">
    <button onClick={handleClick}>Get Inspired</button>
   </div>
    <ShowQuote results={results} />
    <img alt="Kayne face" src={kanye} />
    </div>
  );
}

export default App;
