import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';

function App(props) {
    const [data, setData] = useState(null);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        console.log("inside :flushed: useEffect!")
        fetch('/api')
        .then(response => response.json())
        .then(result => setData(result.message))
    }, [])

    return (
        <div className="App">
            {/* <header className="App-header">
                <p>
                    {data ? data : 'Loading...'}
                </p>
                <h1>This cool side is only the header</h1>
            </header> */}
            <Navbar />
            <Home />
        </div>
    );
}

export default App;