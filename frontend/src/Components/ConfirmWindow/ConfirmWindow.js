import React from 'react'

const ConfirmWindow = ({className, onClose, onDelete, content}) => {
  // const [open, setOpen] = useState(false)
 
  return (
    <div className={className}>
      <p>Are you sure you want to delete {content.title}?</p>
      <div className='btns'>
        <button onClick={onDelete}>Yes</button>
        <button onClick={onClose}>No</button>
      </div>
    </div>
  )
}

export default ConfirmWindow
