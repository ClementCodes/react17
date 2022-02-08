import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';






function App() {

  const inputRef = useRef()
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([])
  const [editing, setEditing] = useState(false)

  const handleOnChange = (e) => {
    setValue(e.target.value)
    setEditing(!!value)
    setTimeout(() => setEditing(false), 2000)
  }

  const handlOnSubmit = (e) => {
    e.preventDefault()
    if (!value) {
  return false
    }
    addItem()
  }
  const addItem = () => {
    setItems([...items, {
      id: new Date().getTime(),
      text: value
    }])
    setValue(null)
    inputRef.current.value = null
    
  }
  const removeItem = (id) => {
    const filtered = items.filter(
      item => item.id !== id

    )
    setItems(filtered)

  }
  useEffect(() => {
   
    console.log(editing);
  
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handlOnSubmit}>
          <input ref={inputRef} type="text" onChange={handleOnChange} />
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <button type='submit'>Add</button>
        </form>     
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => removeItem(item.id)} >{item.text}</li>
          ))
          }        
        </ul> 
      </header>
    </div>
  );
}

export default App;
