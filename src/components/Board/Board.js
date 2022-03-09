import React from 'react'
import './Board.css';
import Tile from '../Tile'

const Board = ({ tiles, numTiles }) => {

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(numTiles)}, 1fr)`,
  }

  const getTiles = tiles.map( tile => <Tile {...tile} />)


  return (
    <div className='Board' style={gridConfig}>
      {getTiles}
    </div>
  )
}

export default Board
