import React from 'react'
import './Piece2.css'

export default function Piece2 ({ image, xLoc, yLoc, size, xImg, yImg, id, z }) {

    return (
        <div 
            id={id}
            className="piece2"
            style={{ 
                backgroundPosition: `-${xImg * size}px -${yImg * size}px`, 
                width: `${size}px`, 
                height: `${size}px`,
                backgroundImage: `url(${image})`,
                left: `${xLoc}px`,
                top: `${yLoc}px`,
                zIndex: `${z}`
            }}
            ></div>
    )
}  