import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("inside :flushed: useEffect!")
    fetch('/api')
    .then(response => response.json())
    .then(result => setData(result.message))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {data ? data : 'Loading...'}
        </p>
      </header>
    </div>
  );
}

export default App;
