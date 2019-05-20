import React from 'react';
import avatar from './assets/images/nasa.jpg';
import './styles/init.css';

export const Instagram = () => {
    return (
        <>
            <section className = 'header'>
                <div className = 'logo' />
                <input
                    placeholder = 'Search'
                    type = 'text'
                />
                <div className = 'nav'>
                    <div className = 'explore' />
                    <div className = 'likes' />
                    <div className = 'settings' />
                </div>
            </section>
            <section className = 'content'>
                <div className = 'profile'>
                    <img
                        className = 'avatar'
                        src = { avatar }
                    />
                    <div className = 'main'>
                        <span className = 'nickname'>nasa</span>
                        <div className = 'stats'>
                            <div>
                                <span>2.614</span>&nbsp;posts
                            </div>
                            <div>
                                <span>42.4m</span>&nbsp;followers
                            </div>
                            <div>
                                <span>84</span>&nbsp;following
                            </div>
                        </div>
                        <span className = 'name'>NASA</span>
                    </div>
                </div>
            </section>
        </>
    );
};
