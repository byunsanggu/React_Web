import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus two make four. If 
                that is granted, all else 
                follws."
            </span>
            <span>- George Orwell, 198s</span>
        </div>

    );
}

export default About; 