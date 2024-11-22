import React from 'react'

const Buttongroup = () => {
  return (
    <>
      <div className=''>
        <button className='w-32 bg-gradient-to-br from-blue-300 to-blue-800 hover:bg-gradient-to-tl text-white rounded px-4 py-2'>
          left
        </button>
        <button className='w-32 bg-gradient-to-br from-blue-300 to-blue-800 hover:bg-gradient-to-tl text-white rounded px-4 py-2'>
          middle
        </button>
        <button className='w-32 bg-gradient-to-br from-blue-300 to-blue-800 hover:bg-gradient-to-tl text-white rounded px-4 py-2'>
          right
        </button>
      </div>
    </>
  )
}

export default Buttongroup