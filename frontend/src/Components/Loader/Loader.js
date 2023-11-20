import React from 'react'
import {RingSpinner} from 'react-spinner-overlay'

const Loader = ({className, loading}) => {
  return (
    <div className={className}>
      <RingSpinner 
          loading={loading}
          overlayColor="rgba(0,153,255,0.2)"
          size={80}
          color='rgba(56,68,93,0.8)'
          borderWidth={6}
          
        />
    </div>
  )
}

export default Loader
