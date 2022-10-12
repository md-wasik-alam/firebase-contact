import React from 'react'

const Create = () => {
  return (
    <div className='flex p-8'>
      <input type="text" placeholder='Default Input'  className='border rounded w-full px-2 py-4 '/>
      <button className="bg-slate-700 text-white px-8 hover:bg-slate-900 rounded-sm ">Go</button>
    </div>
  )
}

export default Create
