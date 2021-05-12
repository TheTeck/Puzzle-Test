import React, { useState } from 'react'
import Piece from '../../Components/Piece/Piece'
import './Puzzle.css'

export default function Puzzle () {

    const puzzleImage = 'images/radagast.png'
    const puzzleDim = [ 584, 469 ]
    const pieceSize = 40

    const [ xCount, setXCount ] = useState(Math.floor(puzzleDim[0] / pieceSize))
    const [ yCount, setYCount ] = useState(Math.floor(puzzleDim[1] / pieceSize))

    const thePuzzle = []

    for (let i = 0; i < yCount; i++) {
        for (let j = 0; j < xCount; j++) {
            thePuzzle.push([j,i])
        }
    }

    return (
        <div id="puzzle-container">
            {
                thePuzzle.map((piece, index) => {
                    return (
                        <Piece image={puzzleImage} x={piece[0]} y={piece[1]} size={pieceSize} />
                    )
                })
            }
        </div>
    )
}