import React from 'react'

import './Tile.css'

const Tile = ({ selected, matched, color, svg }) => {

  const setColor = () => selected || matched ? { backgroundColor: color } : null

  return (
    <div className='Tile' style={setColor()}>
      { selected || matched ? <svg /> : null }
    </div>
  )
}

export default Tile
