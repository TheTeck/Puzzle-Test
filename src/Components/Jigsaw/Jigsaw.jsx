import React, { useEffect } from 'react'
import './Jigsaw.css'

export default function Jigsaw () {

    const offsetDepth = []
    const offsetPos = []

        for (let i = 0; i < 4; i++) {
            offsetDepth[i] = Math.floor(Math.random() * 30) - 15
            offsetPos[i] = Math.floor(Math.random() * 40) + 30
        }

    return (
        <div id='jigsaw-container'>
            <div 
                style={{
                    width: '400px',
                    height: '400px',
                    backgroundImage: 'url("images/radagast.png")',
                    clipPath: `polygon(15% 15%, ${offsetPos[0]}% ${offsetDepth[0]+15}%, 85% 15%, ${offsetDepth[1] + 85}% ${offsetPos[1]}%, 85% 85%,  ${offsetPos[2]}% ${offsetDepth[2] + 85}%, 15% 85%,  ${offsetDepth[3] + 15}% ${offsetPos[3]}%)`
                }}
            ></div>
        </div>
    )
}