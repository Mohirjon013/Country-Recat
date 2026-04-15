import React from 'react'

function Modal({children, isOpen, setIsOpen}) {
  return (
    <div>
      <div onClick={(e) => e.target.id === "modal" ? setIsOpen(false) : ""} id='modal' className={`fixed inset-0 backdrop-blur-md duration-300 ${isOpen ? "scale-1" : "scale-0"}`}>
        <div className='w-[600px] h-[350px] absolute inset-0 m-auto bg-slate-300 rounded-lg'>
            {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
