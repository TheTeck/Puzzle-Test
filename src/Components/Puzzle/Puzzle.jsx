import React, { useState, useEffect } from 'react'
import Piece from '../../Components/Piece/Piece'
import './Puzzle.css'

export default function Puzzle () {

    const puzzleImage = 'images/radagast.png'
    const puzzleDim = [ 584, 469 ]
    const pieceSize = 40

    const [ xCount, setXCount ] = useState(Math.floor(puzzleDim[0] / pieceSize))
    const [ yCount, setYCount ] = useState(Math.floor(puzzleDim[1] / pieceSize))
    const [ active, setActive ] = useState(false)
    const [ activeX, setActiveX ] = useState(null)
    const [ activeY, setActiveY ] = useState(null)
    const puzzleGrid = []
    const thePuzzle = []

    function toggleActive (e) {
        console.log('e.target.id', e)
        if (!active) {
            setActive(true)
            setActiveX(0)
            setActiveY(0)
        } else {
            setActive(false)
        }
    }

    function movePiece () {
        if (active) {
            thePuzzle[activeY][activeX][0] = 500
            thePuzzle[activeY][activeX][1] = 500
            console.log(activeX, activeY)
            setActive(true)
        }
    }

    for (let i = 0; i < yCount; i++) {
        thePuzzle.push([])
        for (let j = 0; j < xCount; j++) {
            puzzleGrid.push([j,i])
            thePuzzle[i].push([j * pieceSize, i * pieceSize])
        }
    }

    return (
        <div id="puzzle-container" onMouseMove={movePiece} >
            {
                puzzleGrid.map((piece, index) => {
                    return (
                        <Piece
                            key={index} 
                            id={`${piece[0]},${piece[1]}`}
                            image={puzzleImage} 
                            x={piece[0]} 
                            y={piece[1]} 
                            size={pieceSize}
                            xLoc={thePuzzle[piece[1]][piece[0]][0]}
                            yLoc={thePuzzle[piece[1]][piece[0]][1]}
                            toggleActive={toggleActive} 
                            />
                    )
                })
            }
        </div>
    )
}