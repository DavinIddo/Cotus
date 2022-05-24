import React from 'react';
import "./Write.css"

function Write(props) {
    return (
        <div className='write'>
            <img className='write-header' alt='' 
                src='https://images.pexels.com/photos/1029639/pexels-photo-1029639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
            </img>
            <form className='write-form'>
                <div className='write-group'>
                    <label htmlFor='file-input' className='write-file' >
                        <i className="fa-solid fa-circle-plus"></i>
                    </label>
                    <input className='write-file-hidden' id='file-input' type='file' accept="image/png, image/jpeg" hidden />

                    <input className='write-title' type='text' size='50' placeholder='Title' required autoFocus></input>

                </div>
                <div className='write-group'>
                    <textarea className='write-description' placeholder='Your story starts here...'></textarea>
                </div>
                <button className='write-submit'>Publish</button>
            </form>
        </div>
    );
}

export default Write;