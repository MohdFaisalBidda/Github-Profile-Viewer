import logo from './logo.svg';
import {useState} from 'react'
import { SearchBar } from './Components/SearchBar';
import { Card } from './Components/Card';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [didSubmit, setDidSubmit] = useState(false)

  const onSubmit = () => {
    setDidSubmit(true);
  }

  const onChange = (e) => {
    setSearchQuery(e.target.value);
    setDidSubmit(false);
  }


  return (
    <div className="App">
      <SearchBar
        onChange={onChange}
        onClick={onSubmit}
        value={searchQuery}
      />
      {didSubmit && <Card username={searchQuery} />
      }
    </div>
  )
}

export default App;
