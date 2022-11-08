import React, { useState } from 'react';
import "./Write.css"

function Write(props) {
    const [fetchedGames, setFetchedGames] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form has been submitted!");
    }

    function handleSearch(event) {
        event.preventDefault();
        console.log(event.target[0].value);

        const data = {
            game: event.target[0].value
        };

        fetch('/api/create/fetchGame', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                setFetchedGames(data["queriedGame"])
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className='write'>
            <img className='write-header' alt='' 
                src='https://images.pexels.com/photos/1029639/pexels-photo-1029639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
            </img>

            <form className='write-form' onSubmit={(e) => handleSearch(e)}>
                <input className='write-game-input' type='text' size='50' placeholder='Desired game to be reviewed...' required></input>
                <button className='write-game-search'>Search</button>
            </form>

            <form className='write-form' onSubmit={(e) => handleSubmit(e)}>
                <div className='write-group'>
                    {/* {fetchedGames.length ? 
                            <select className='write-game-select' required>
                                <option value="" selected disabled hidden>-- list of searched games --</option>
                                {fetchedGames.map((game, index) => (
                                    <option key={index} value={game.appid}>{game.name}</option>
                                ))}
                            </select> 
                        :
                            <select className='write-game-select' required disabled>
                                <option value="" selected disabled hidden>-- list of searched games --</option>
                            </select>
                    } */}

                    <select className={fetchedGames.length ? 'write-game-select' : 'write-game-select select-disabled'} required>
                        <option value="" selected hidden>-- list of searched games --</option>
                        {fetchedGames.map((game, index) => (
                            <option key={index} value={game.appid}>{game.name}</option>
                        ))}
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