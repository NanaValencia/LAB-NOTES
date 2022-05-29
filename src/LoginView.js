import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import './App.css';

export default function LoginView() {
    return (
        <div>
        <h1 className='LoginView'>Fun-Notes</h1>
        <h3>Notes app to have all your pending in order and not lose anything</h3>
        <button>Login with Google</button>
        </div>
    );
}
