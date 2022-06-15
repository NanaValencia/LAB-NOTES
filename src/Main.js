import React, { useEffect } from 'react';
import { logout, noteList} from './firebase/firebase.js';
import { useNavigate } from 'react-router-dom';
import { Notes } from './Notes.js';
import './Main.css';
import { ShowNotes } from './showNotes.js';

export const Main = () => {
    const navigate = useNavigate();
    useEffect(() => {
      getNotes()
    }, [])
    const logoutBtn = () => {
      logout()
      .then((result) => {
        if (window.confirm('Are you sure to close?'))
        console.log(result);
        navigate('/');
      }) .catch (error => {
        console.log(error);
      })  
    };

    const getNotes = () => {
      noteList().then(resp => { console.log(resp)}).catch(error =>console.error(error));
    }
return(
  <div className='notes'>
     <button className='BtnLogout' onClick={logoutBtn}>
          Logout</button>
     <h3 className='sentence'>Hello! this is my notes</h3>
   
     <ShowNotes />
  </div>
  
    );
  };

  