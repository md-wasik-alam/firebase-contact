// import { async } from '@firebase/util';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../firebase'
const Create = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello ")
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      })
      setTitle("");
    }
  }
  return (
    <div >
      <form onSubmit={handleSubmit} className='flex p-8'>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Default Input' className='border rounded w-full px-2 py-4 ' />
        <button type='submit' className="bg-slate-700 text-white px-8 hover:bg-slate-900 rounded-sm ">Go</button>
      </form>
    </div>
  )
}

export default Create
