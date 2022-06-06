import React from 'react';
import { useNavigate } from "react-router-dom";
import { loginWithGoogle, auth} from './firebase/firebase.js';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './LoginView.css';


 export function LoginView() {
    const navigate = useNavigate();
          const loginWithGoogle = () => {
              const provider = new GoogleAuthProvider();
              return signInWithPopup(auth, provider)
              .then ((result) => {
                  navigate('/Main');
                  console.log(result);
              });
          };
          return(
            <div className='loginView'>
               <h1 className='title'>Fun-Notes</h1>
               <h3 className='description'>Notes app to have all your pending in order and not lose anything</h3>
               <button className='BtnLogin' onClick={loginWithGoogle}>
                Login with Google</button>
              </div>
              );
  }

    function Notes () {
        <div>
            <textarea>Title</textarea>
            <textarea>
                
            </textarea>

        </div>
    }

