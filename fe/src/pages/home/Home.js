import React from 'react';
import Articles from '../../components/Home/Articles';
import Header from '../../components/Home/Header';
import Sidebar from '../../components/Sidebar';
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <Header />
            <div className='home-content'>
                <Articles />
                {/* <Sidebar /> */}
            </div>
        </div>
    );
}

export default Home;