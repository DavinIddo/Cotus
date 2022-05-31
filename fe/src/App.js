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

function App() {
    const [userData, setUserData] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const [errMessage, setErrMessage] = useState("");

    // useEffect(() => {
    //     console.log("inside :flushed: useEffect!")
    //     fetch('/api')
    //     .then(response => response.json())
    //     .then(result => setData(result.message))
    // }, [])

    function handleLogin(event) {
        event.preventDefault();
        
        let okStatus;
        const data = { 
            username: event.target[0].value, 
            password: event.target[1].value, 
        };

        fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                okStatus = response.ok;
                return response.json();
            })
            .then((data) => {
                console.log(data["message"]);
                if (okStatus) {
                    setUserData(data["userData"]);
                    setIsLogin(true);
                } else {
                    setErrMessage(data["message"]);
                    throw new Error(data["message"]);
                }

            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleLogout(newUserState) {
        setIsLogin(newUserState);
        setUserData(null);
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
                        element={isLogin ? <Navigate to="/" /> : <Login handleLogin={handleLogin} errMessage={errMessage} />}
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
