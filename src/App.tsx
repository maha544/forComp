import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForInput from './components/ForInput';
import ForButton from './components/ForButton';
import ForTable from './components/ForTable';

function App() {
  const forRes = ()=>{
    alert("thank you for writing a quote..");
  };
  const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Doe', age: 35 },
  ];

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
  ];
    return (
    <div className="App">
      <div className="m-5">
      <ForInput 
      placeholder='Write your fav quote..'
      onChange={(e : any)=>{
        console.log(e.target.value)
      }}/>
      <ForButton 
      value = "Enter"
      onClick= {forRes}/>
      </div>
      <div className='container'>
      <h5>My Table</h5>
      <ForTable data={data} columns={columns} />
      </div>
    </div>
  );
}

export default App;
