import React from 'react'
import './Piece2.css'

//export default function Piece2 ({ image, xLoc, yLoc, size, xImg, yImg, id, z }) {
export default function Piece2 ({ image, size, id, piece}) {
    return (
        <div 
            id={id}
            className="piece2"
            style={{ 
                backgroundPosition: `-${piece.x * size}px -${piece.y * size}px`, 
                width: `${size}px`, 
                height: `${size}px`,
                backgroundImage: `url(${image})`,
                left: `${piece.xLoc}px`,
                top: `${piece.yLoc}px`,
                zIndex: `${piece.z}`
            }}
            ></div>
    )
}  