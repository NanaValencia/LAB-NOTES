import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { noteList } from "./firebase/firebase.js";
import { Notes } from './Notes.js'
import './showNotes.css';


export const ShowNotes = () => {
  const [notes, setNotes] = useState([]);
//   const navigate = useNavigate();
  useEffect(() => {
    getNotes();
  }, []);
const addNote = (title, note) => {
    setNotes([...notes, {title, note}])

}
const getNotes = async () => {
    const getNoteList = await noteList();
    setNotes(getNoteList);
    console.log('soy notelist', notes);
};

return (
    <div className="showNotes">
        <Notes addNote={addNote} />
        {notes.map((note) => {
            return <div key={note.id}>
              <textarea className="showTitle">{note.title}</textarea>
              <textarea className="showNote">{note.note}</textarea>
            </div>
        })} 
    </div> 
    )
};