import React from 'react'

const PopUp = ({id, onClose, header, body, footer }) => {
  return (
    <div>
        <div id={id || 'anything'} className='flex flex-col items-center justify-center w-[600px] h-[400px] bg-blue-200 rounded-md shadow-md'>
        <span onClick={onClose} className='cursor-pointer font-bold text-2xl hover:text-3xl mb-2'>X</span>
        <div className='bg-blue-300 w-80 h-20 rounded-t-md flex items-center justify-center'>
            {header}
        </div>
        <div className='bg-blue-500 w-80 h-20 flex items-center justify-center'>
            {body}
        </div>
        <div className='bg-blue-700 w-80 h-20 rounded-b-md flex items-center justify-center'>
            {footer}
        </div>
        </div>
    </div>
  )
}

export default PopUp