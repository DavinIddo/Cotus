import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

function App(props) {
    const [userData, setUserData] = useState(null);
    const [isLogin, setIsLogin] = useState(false);

    // useEffect(() => {
    //     console.log("inside :flushed: useEffect!")
    //     fetch('/api')
    //     .then(response => response.json())
    //     .then(result => setData(result.message))
    // }, [])

    function handleLogin(newUserState, newUserData) {
        setIsLogin(newUserState);
        setUserData(newUserData);
    }

    function handleLogout(newUserState) {
        setIsLogin(newUserState);
    }

    return (
        <div className="App">
            <Router>
                <Navbar user={isLogin} handleLogout={handleLogout} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/write"
                        element={
                            isLogin ? <Write /> : <Navigate to="/register" />
                        }
                    />
                    <Route
                        path="/login"
                        element={isLogin ? <Navigate to="/" /> : <Login />}
                    />
                    <Route
                        path="/register"
                        element={isLogin ? <Navigate to="/" /> : <Register />}
                    />
                    <Route
                        path="/profile"
                        element={
                            isLogin ? <Profile userData={userData} /> : <Navigate to="/login" />
                        }
                    />
                    <Route path="/single/:singleId" element={<Single />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
