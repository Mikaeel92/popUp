import React, { useState } from 'react'
import PopUp from './PopUp'

const App = () => {

  const [showPopUp, setShowPopUp] = useState(false)

  const handlePopup = () => {
    setShowPopUp(!showPopUp)
  }

  const handleClose = () => {
    setShowPopUp(false)
  }

  return (
    <div className='flex flex-col items-center justify-center bg-gray-200 w-screen h-screen gap-4'>
      <button 
      onClick={handlePopup}
      className="rounded-md p-2 bg-blue-800 text-white hover:bg-blue-900">Open Modal Popup!</button>
      {
        showPopUp ?
          <PopUp
          id={7}
          onClose={handleClose}
          header={<h1>This Is Custom Header!</h1>} 
          body={<h2>This Is Custom Body!</h2>} 
          footer={<p>This Is Custom Footer!</p>}
          />
        : null
      }
    </div>
  )
}

export default App