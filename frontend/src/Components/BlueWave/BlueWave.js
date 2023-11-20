import React from 'react'
import lineBlue from '../../assets/line-blue.svg'

const BlueWave = ({className}) => {
  return (
    <div className={className}>
      <img className='wave' src={lineBlue} alt="blue wavy divider" />
    </div>
  )
}

export default BlueWave