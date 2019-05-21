import React from 'react';
import '../styles/stories.css';
import stories from '../assets/data/stories.json';


export const Stories = () =>{
    const storiesJSX = stories.map((story)=>{
        return (
            <div className = 'story'>
                <div>
                    <img
                        key = { story.id }
                        src = { story.src }
                    >
                    </img>
                </div>
                <span>
                    {story.message}
                </span>
            </div>
        );
    });

    return (
        <div className  = 'stories'>
            {storiesJSX}
        </div>
    );
};
