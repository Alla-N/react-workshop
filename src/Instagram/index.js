import React from 'react';
import './styles/init.css';

import { Header } from './components/Header';
import { Content } from './components/Content';
import {Footer} from './components/Footer'
import {Stories} from './components/Stories'

export const Instagram = () => {
    return (
        <>
            <Header />
            <Content />
            <Footer/>
        </>
    );
};
