
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Table from './components/Table';



function App() {


  // const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   const q = query(collection(db, "todos"));
  //   const unsub = onSnapshot(q, (QuerySnapshot) => {
  //     let todoArray = [];
  //     QuerySnapshot.forEach((doc) => {
  //       todoArray.push({ ...doc.data(), id: doc.id })
  //     })
  //     setTodos(todoArray);
  //   })
  //   return () => unsub()
  // }, [])

  // const handleDelete = async (id) => {
  //   await deleteDoc(doc(db,"todos",id));
  // }
  // const handleDone = async (todo) => {
  //     await updateDoc(doc(db,"todos",todo.id),{
  //       completed:!todo.completed
  //     })
  // }
  // const handleEdit = async (todo, title) => {
  //   await updateDoc(doc(db, "todos", todo.id), { title: title })
  // }


  return (
    <>
      <Header />
      <div className='flex bg-gray-50 '>
        <div className='w-2/5'>
          <Form />
        </div>
        <div className='w-full'>
            <Table/>
        </div>

    </div>
      </>
  );
}

export default App;
