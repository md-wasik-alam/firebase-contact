import React from 'react'

const Table = ({ dataRecords, handleDelete,handleUpdate }) => {
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
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            dataRecords.map((d, index) => {
              return (
                <tr key={index}>
                  <td className="border">{index + 1}</td>
                  <td className="border">
                    {d.name}
                  </td>
                  <td className="border">{d.contact}</td>
                  <td className="border p-1" ><button onClick={() => handleDelete(d.id)} className='px-6 text-white py-1 rounded-md bg-red-600 hover:bg-red-800'>X</button></td>
                  <td className="border p-1" ><button onClick={() => handleUpdate(d)} className='px-6 text-white py-1 rounded-md bg-blue-600 hover:bg-blue-800'>Update</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
