import React, { useState, useEffect } from 'react'

const PopUp = ({className, show, content, onClose}) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (show) {
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false)
                onClose()
            }, 4000)
        }
    }, [show, onClose])
  return (
    isVisible && (<div className={className}>
      <p>{content}</p>
    </div>)
  )
}

export default PopUp
