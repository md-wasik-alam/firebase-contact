import React, { useState } from 'react'

const List = () => {
    const [workdone, SetWorkdone] = useState(true)

    const handleWorkdon = () => {

        SetWorkdone(!workdone);
    }
    return (
        <div className='flex flex-col p-8 space-y-3 text-xl font-semibold'>
            <div className=" items-center border-yellow-700 bg-yellow-50 border-2 rounded-md text-black px-4 py-4 flex justify-between">
                {workdone ? <span>Buy a Milk</span> : <span><s>Buy a Milk</s></span>}
                <span className='flex gap-2'>
                    <button className='text-gray-100 bg-red-500 px-3 py-1 rounded-md hover:bg-red-700' >X</button>
                    <button onClick={handleWorkdon} className='text-gray-100 bg-teal-500 px-3 py-1 hover:bg-teal-700 rounded-md' >Done</button>

                </span>
            </div>


        </div>
    )
}

export default List
