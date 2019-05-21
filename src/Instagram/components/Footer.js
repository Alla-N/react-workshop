import React from 'react';
import '../styles/footer.css'
import links from '../assets/data/links.json'



export const Footer = () =>{
    const linksJSX = links.map((link)=>{
        return (
            <li
            key={link.id}
            >
                {link.message}
            </li>
        )
    })
    return (
        <div className  = 'footer'>
            <ul>
                {linksJSX}

            </ul>
        </div>
    );
};

