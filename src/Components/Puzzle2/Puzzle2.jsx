import React, { useState, useEffect } from 'react'
import Piece2 from '../Piece2/Piece2'
import './Puzzle2.css'

export default function Puzzle2 () {

    const puzzleImage = 'images/radagast.png'
    const puzzleDim = [ 584, 469 ]
    const pieceSize = 100

    const [ xCount, setXCount ] = useState(Math.floor(puzzleDim[0] / pieceSize))
    const [ yCount, setYCount ] = useState(Math.floor(puzzleDim[1] / pieceSize))
    const [ currentActive, setCurrentActive ] = useState(null)
    const [ thePuzzle, setThePuzzle ] = useState([])
    const [ force, setForce ] = useState(false)

    // Look for a connection between pieces
    function checkConnection () {
        let outputX = thePuzzle[currentActive].xLoc
        let outputY = thePuzzle[currentActive].yLoc

        // Check if piece above active piece is in range and snap to it
        if (thePuzzle[currentActive].y !== 0 && !thePuzzle[currentActive].connected.includes(currentActive - xCount)) {
            if (Math.abs(thePuzzle[currentActive].yLoc - (thePuzzle[currentActive-xCount].yLoc + pieceSize)) < 15
                && Math.abs(thePuzzle[currentActive].xLoc - (thePuzzle[currentActive-xCount].xLoc)) < 15) {
                outputX = thePuzzle[currentActive-xCount].xLoc
                outputY = thePuzzle[currentActive-xCount].yLoc + pieceSize
                return [ outputX, outputY ]
            }
        }
        // Check if piece to the left of the active piece is in range and snap to it
        if (thePuzzle[currentActive].x !== 0 && !thePuzzle[currentActive].connected.includes(currentActive - 1)) {
            if (Math.abs(thePuzzle[currentActive].xLoc - (thePuzzle[currentActive-1].xLoc + pieceSize)) < 15
                && Math.abs(thePuzzle[currentActive].yLoc - (thePuzzle[currentActive-1].yLoc)) < 15) {
                outputX = thePuzzle[currentActive-1].xLoc + pieceSize
                outputY = thePuzzle[currentActive-1].yLoc
                return [ outputX, outputY ]
            }
        }
        // Check if piece below active piece is in range and snap to it
        if (thePuzzle[currentActive].y !== yCount-1 && !thePuzzle[currentActive].connected.includes(currentActive + xCount)) {
            if (Math.abs(thePuzzle[currentActive].yLoc - (thePuzzle[currentActive+xCount].yLoc - pieceSize)) < 15
                && Math.abs(thePuzzle[currentActive].xLoc - (thePuzzle[currentActive+xCount].xLoc)) < 15) {
                outputX = thePuzzle[currentActive+xCount].xLoc
                outputY = thePuzzle[currentActive+xCount].yLoc - pieceSize
                return [ outputX, outputY ]
            }
        }
        // Check if piece to the right of the active piece is in range and snap to it
        if (thePuzzle[currentActive].x !== xCount-1 && !thePuzzle[currentActive].connected.includes(currentActive + 1)) {
            if (Math.abs(thePuzzle[currentActive].xLoc - (thePuzzle[currentActive+1].xLoc - pieceSize)) < 15
                && Math.abs(thePuzzle[currentActive].yLoc - (thePuzzle[currentActive+1].yLoc)) < 15) {
                outputX = thePuzzle[currentActive+1].xLoc - pieceSize
                outputY = thePuzzle[currentActive+1].yLoc
                return [ outputX, outputY ]
            }
        }

        return [ outputX, outputY ]
    }

    function setActive(e) {
        if (currentActive) {
            const temp = thePuzzle
            const locs = checkConnection()
            temp[currentActive].z = 1
            temp[currentActive].xLoc = locs[0]
            temp[currentActive].yLoc = locs[1]
            setThePuzzle(temp)
            setCurrentActive(null)
        } else {
            if (e.target.id >= 0 && e.target.id < yCount * xCount)
                setCurrentActive(+e.target.id)
        }
    }

    function movePiece(e) {
        if (currentActive) {
            const temp = thePuzzle
            temp[currentActive].xLoc = e.clientX - pieceSize / 2
            temp[currentActive].yLoc = e.clientY - pieceSize / 2
            temp[currentActive].z = 2
            setThePuzzle(temp)
            setForce(!force)
        }
    }

    useEffect(() => {
        const temp = []
        for(let y = 0; y < yCount; y++) {
            for (let x = 0; x < xCount; x++) {
                temp.push(
                    {
                        x: x,
                        y: y,
                        z: 1,
                        xLoc: x * pieceSize,
                        yLoc: y * pieceSize,
                        connected: []
                    }
                )
            }
        }
        setThePuzzle(temp)
    }, [])

    return (
        <div id="puzzle2-container" onClick={setActive} onMouseMove={movePiece} >
            {
                thePuzzle.map((piece, index) => {
                    return (
                        <Piece2 
                            key={index}
                            image={puzzleImage}
                            xLoc={piece.xLoc}
                            yLoc={piece.yLoc}
                            size={pieceSize}
                            xImg={piece.x}
                            yImg={piece.y}
                            id={index}
                            z={piece.z}
                        />
                    )
                })
            }
        </div>
    )
}