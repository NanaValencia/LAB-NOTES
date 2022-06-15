import React, { useState } from 'react';
import { saveNotes } from './firebase/firebase.js';
import './Notes.css';


export function Notes ({addNote}) {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const updateFile = (e) => {
        setNote(e.target.value); 
    }
    const updateTitle = (e) => {
        setTitle(e.target.value);
    }
    const btnSave = (title, note) => {
        console.log('soy titulo y nota',title, note);
        saveNotes(title, note).then(()=> {
            addNote(title, note)
            setTitle('')
            setNote('')
        }) 
    }
    console.log(title, note);
    return( 
    <div className='notesContainer'>
        <textarea 
            className='title' 
            name='title'
            placeholder='Title' 
            value={title} 
            onChange = {(event)=> {updateTitle(event)}}>    
        </textarea>
        <textarea 
            className='note' 
            name='note'
            value={note}
            onChange = {(event)=> {updateFile(event)}}>
        </textarea>
        <button className='btnSave' onClick={()=> {btnSave(title, note)}}></button>
    </div>
);
}