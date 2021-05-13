import React from 'react'
import './Piece.css'

export default function Piece ({ image, x, y, size, xLoc, yLoc, toggleActive }) {

    function selectPiece (e) {
        toggleActive(e)
    }

    return (
        <div 
            className="piece"
            onClick={selectPiece}
            style={{ 
                backgroundPosition: `-${x * size}px -${y * size}px`, 
                width: `${size}px`, 
                height: `${size}px`,
                backgroundImage: `url(${image})`,
                left: `${xLoc}px`,
                top: `${yLoc}px`
            }}
            ></div>
    )
}     