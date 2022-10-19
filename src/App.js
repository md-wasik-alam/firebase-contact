
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Table from './components/Table';



function App() {


 


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
