
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Table from './components/Table';
import { db } from './firebase';



function App() {
  const [dataRecords, setDataRecords] = useState([])
  const [isEditMode, setIsEditMode] = useState(false);
  const [updateRecord,setUpdateRecord]=useState({})



  useEffect(() => {
    const q = query(collection(db, "contacts"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todoArray = [];
      querySnapshot.forEach((doc) => {
        todoArray.push({ ...doc.data(), id: doc.id });
      })
      setDataRecords(todoArray);

    })
    return () => unsub()
  }, [])

  const handleDelete = async (id) => {

    await deleteDoc(doc(db, "contacts", id));
  }

  const handleUpdate = async (d) => {
    // console.log(d);
    setIsEditMode(true);
    setUpdateRecord(d);
  }
  return (
    <>
      <Header />
      <div className='flex bg-gray-50 '>
        <div className='w-2/5'>
          {!isEditMode &&
            <Form />
          }
          {
            isEditMode&&
           <Form propsValue={updateRecord}/>
          }
        </div>
        <div className='w-full'>
          <Table dataRecords={dataRecords} handleDelete={(id) => handleDelete(id)} handleUpdate={handleUpdate} />
        </div>

      </div>
    </>
  );
}

export default App;
