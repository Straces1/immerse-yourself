import React from 'react'
import lineWhite from '../../assets/line-white.svg'

const WhiteWave = ({className}) => {
  return (
    <div className={className}>
      <img className='wave' src={lineWhite} alt="white wavy divider" />
    </div>
  )
}

export default WhiteWave
