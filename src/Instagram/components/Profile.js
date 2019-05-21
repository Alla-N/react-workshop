import React from 'react';
import '../styles/profile.css';

import avatar from '../assets/images/nasa.jpg';
import {Main} from './Main';
import {Stories} from './Stories'
import {Images} from './Images';

export const Profile = () =>{
    return (
        <div className = 'profile'>
            <img
                className = 'avatar'
                src = { avatar }
            />
            <Main/>
            <Stories/>
            <Images/>
        </div>
    );
};
