import React from 'react';
import '../styles/main.css';


export const Main = () => {
    return (
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
    );
};
