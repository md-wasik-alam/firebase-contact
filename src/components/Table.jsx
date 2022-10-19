import React from 'react'

const Table = () => {
  return (
    <div className='p-4  h-screen'>
      <div className='text-4xl text-teal-500'> PhoneBook List</div>
      <table className='text-black w-full mt-5 text-center'>
        <thead>
          <tr>
            <th className="border">Id</th>
            <th className="border">Name</th>
            <th className="border">Contact</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td className="border">1</td>
            <td className="border">
              wasik
            </td>
            <td className="border">9955015651</td>
            <td className="border p-1" ><button className='px-6 text-white py-1 rounded-md bg-red-600 hover:bg-red-800'>X</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
