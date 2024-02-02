import React, { useState } from 'react';
import './App.css';

function App() {
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const foundWord = dictionary.find(word => word.word.toLowerCase() === lowerCaseSearchTerm);

    if (foundWord) {
      setSearchResult(foundWord.meaning);
    } else {
      setSearchResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="x-dictionary-container">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a word..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div >
        <p className="definition-container">Definition:</p>
        {searchResult && (
          <div>
            <p>{searchResult}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
