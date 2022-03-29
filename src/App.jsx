import { useEffect, useMemo, useState } from 'react';
import './App.css';
import useLocalStorage from './Custom Hooks/useLocalStorage';
import useTheme from './Custom Hooks/useTheme';

function App() {
  const [setUserTheme,setClassName,setTheme] = useTheme({
    "background-color": "red",
    "fontSize": "14px",
    "border-radius": "4px",
    "button-border": "none",
    "color": "#FFF",
    "button-background-color": "#6772e5",
    "button-hover-border": "none",
    "button-hover-color": "#FFF",
  })
  const [value, setValue, clear, get] = useLocalStorage("inputValue", "");
  const [inputValue, setInputValue] = useState("")
  const [valueToShow, setValueToShow] = useState("")
  let text = "hello"
  const takeValue = (e) =>{
    setInputValue(e.target.value)
  }
 const handleThemeChoose = ()=>{
  setClassName("button")
  setTheme(); 
}
  return (
    <div className="App">
      <input type="text" onChange={takeValue}/>
      <button onClick={()=> {
        setValue(inputValue)
      }} >Set Value</button>
      <button onClick={()=> {
        clear()
      }} >Clear Value</button>
       <button onClick={()=>{
        setValueToShow(get())
       }} >Get Value</button>
       <div style={{
         color:"green",
         fontSize:"30px"
       }}>{valueToShow}</div>
       <button onClick={handleThemeChoose}>Set Theme</button>
        <button className="button" onClick={handleThemeChoose}>Button</button>
    </div>
  );
}

export default App;

