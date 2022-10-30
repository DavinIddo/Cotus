import React, { useState } from 'react';
import "./Write.css"

function Write(props) {
    const [game, setGame] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form has been submitted!");
    }

    function handleSearch(event) {
        event.preventDefault();
        console.log("Game has been searched");
        console.log(game)
    }

    return (
        <div className='write'>
            <img className='write-header' alt='' 
                src='https://images.pexels.com/photos/1029639/pexels-photo-1029639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
            </img>

            <form className='write-form' onSubmit={(e) => handleSearch(e)}>
                <input className='write-game-input' type='text' size='50' placeholder='Desired game to be reviewed...' value={game} onChange={(newGame) => setGame(newGame.target.value)} required></input>
                <button className='write-game-search'>Search</button>
            </form>

            <form className='write-form' onSubmit={(e) => handleSubmit(e)}>
                <div className='write-group'>
                    <select className='write-game-select' required>
                        <option value="" selected disabled hidden>-- list of searched games --</option>
                        <option value="Elden Ring">Elden Ring</option>
                        <option value="Elden Ring DLC">Elden Ring DLC</option>
                    </select>
                </div>

                <div className='write-group'>
                    <label htmlFor='file-input' className='write-file' >
                        <i className="fa-solid fa-circle-plus"></i>
                    </label>
                    <input className='write-file-hidden' id='file-input' type='file' accept="image/png, image/jpeg" hidden />

                    <input className='write-title' type='text' size='50' placeholder='Title' required autoFocus></input>

                </div>
                
                <div className='write-group'>
                    <textarea className='write-description' placeholder='Your story starts here...' required></textarea>
                </div>

                <div className='write-group last-group'>
                    <button className='write-submit'>Publish</button>
                </div>
            </form>
        </div>
    );
}

export default Write;