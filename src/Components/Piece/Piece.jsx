import React from 'react'
import './Piece.css'

export default function Piece ({ image, x, y, size }) {

    return (
        <div 
            className="piece"
            style={{ 
                backgroundPosition: `-${x * size}px -${y * size}px`, 
                width: `${size}px`, 
                height: `${size}px`,
                backgroundImage: `url(${image})`,
                left: `${x * size}px`,
                top: `${y * size}px`
            }}
            ></div>
    )
}     