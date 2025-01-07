import React, { useState } from 'react'
import PopUp from './PopUp'

const App = () => {

  const [showPopUp, setShowPopUp] = useState(false)

  const handlePopup = () => {
    setShowPopUp(!showPopUp)
  }

  return (
    <div className='flex flex-col items-center justify-center bg-gray-200 w-screen h-screen gap-4'>
      <button 
      onClick={handlePopup}
      className="rounded-md p-2 bg-blue-800 text-white hover:bg-blue-900">Open Modal Popup!</button>
      {
        showPopUp ?
          <PopUp />
        : null
      }
    </div>
  )
}

export default App