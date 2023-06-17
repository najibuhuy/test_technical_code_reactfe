import './App.css';
import {useState} from 'react'
import GetDataResult from './data/data';
function App() {
  const [value, setValue] = useState("");
  return (
    <div>
      <input type='search' placeHolder = 'Masukkan bilangan' onChange= {e => setValue(e.target.value)}/>
      <GetDataResult data = {value} />
    </div>
    
  );
}

export default App;
