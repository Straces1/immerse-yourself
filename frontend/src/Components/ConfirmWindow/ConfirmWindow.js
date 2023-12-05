import React from 'react'

const ConfirmWindow = ({className, onClose, onDelete, content}) => {

 
  return (
    <div className={className}>
      <p>{content}</p>
      <div className='btns'>
        <button onClick={onDelete}>Yes</button>
        <button onClick={onClose}>No</button>
      </div>
    </div>
  )
}

export default ConfirmWindow
