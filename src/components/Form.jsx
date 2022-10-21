import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebase'


const Form = ({ propsValue }) => {
    const [name, setName] = useState((propsValue?.name) ? propsValue?.name : "")
    const [contact, setContact] = useState((propsValue?.contact) ? propsValue?.contact : "")

    const handleSubmit = async () => {
        if (propsValue === undefined) {
            await addDoc(collection(db, "contacts"), {
                name,
                contact,

            })
        }
        if (propsValue !== undefined) {
            await updateDoc(doc(db, "contacts",propsValue?.id), {
                name: name,
                contact: contact
            })
        }
        setName("")
        setContact("")
    }

    return (
        <div>
            <div className="p-4">
                <label htmlFor="Name" className='text-2xl'>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id='Name' placeholder='Enter name' className='w-full border-2 p-3 rounded-md' />
            </div>
            <div className="p-3">
                <label htmlFor="contact" className='text-2xl'>contact</label>
                <input value={contact} onChange={(e) => setContact(e.target.value)} type="number" id='contact' placeholder='Enter mobile no ' className='w-full border-2 p-3 rounded-md' />
            </div>
            <div className="p-3">

                <button type='submit' onClick={handleSubmit} className='bg-teal-700 text-xl hover:bg-teal-800 p-2 w-full rounded-md text-white'>submit</button>
            </div>
        </div>
    )
}

export default Form
