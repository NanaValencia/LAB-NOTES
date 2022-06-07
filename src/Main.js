import React from 'react';
import { logout } from './firebase/firebase.js';
import { useNavigate } from 'react-router-dom';
import { Notes } from './Notes.js';
import './Main.css';

export const Main = () => {
    const navigate = useNavigate();
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
return(
  <div className='notes'>
     <button className='BtnLogout' onClick={logoutBtn}>
          Logout</button>
     <h3 className='sentence'>Hello! this is my notes</h3>
     <Notes name = {'Johana'} />
  </div>
  
    );
  };

  