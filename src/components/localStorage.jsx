import { useContext, useEffect, useMemo, useState } from 'react';
import useLocalStorage from '../CustomHooks/useLocalStorage';
function LocalStorage (){
const [value, setValue, clear, get] = useLocalStorage("inputValue", "");
  const [inputValue, setInputValue] = useState("");
  const [valueToShow, setValueToShow] = useState("");
  const takeValue = (e) =>{
    setInputValue(e.target.value)
  }
  return (
    <div>
      <input type="text" onChange={takeValue} className="hookChanged"/>
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
    </div>
  );
}
export default LocalStorage;