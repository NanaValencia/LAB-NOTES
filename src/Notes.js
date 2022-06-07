import React, { useState } from 'react';
import { saveNotes } from './firebase/firebase.js';
import './Notes.css';


export function Notes ({name}) {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    console.log(note);
    return( 
    <div className='notesContainer'>
        <textarea 
            className='title' 
            placeholder='Title' 
            value={title} 
            onChange = {(event)=> {setTitle(event.target.value);}}>    
        </textarea>
        <textarea 
            className='note' 
            placeholder='Write here you note' 
            value={note}
            onChange = {(event)=> {setNote(event.target.value);}}>
        </textarea>
        <button onClick={()=> {saveNotes(title, note)}}>+</button>
    </div>
);
}