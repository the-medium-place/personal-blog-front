import React from 'react';
import Typewriter from 'typewriter-effect';

export default function TypeText() {

    return (
        <div className="type-text">
            <h3>Hello! My name is Zac Stowell and I am a
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(200)
                        // .pasteString('Hello! My name is Zac Stowell and I am a')
                        .typeString('Web Developer')
                        .pauseFor(300)
                        .deleteChars(13)
                        .typeString('Freelance Musician')
                        .pauseFor(220)
                        .deleteChars(23)
                        .typeString('Professional Drummer?')
                        // .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
                        // .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
                        .pauseFor(1000)
                        .start()
                }}
            />
            </h3>
        </div>
    )
}
