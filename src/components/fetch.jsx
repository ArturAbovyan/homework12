import useFetch from "../CustomHooks/useFetch";
import { useState } from "react";

function Fetch (){
    const [setUrl, info] = useFetch('');
    const [inputValue, setInputValue] = useState("");
    const handleTakeValue = (e) =>{
      setInputValue(e.target.value)
    }

    return(
        <div>
            <input type="text" onChange={handleTakeValue}/>
            <button onClick={()=> {
                setUrl(inputValue)
             }} >Set Value</button>
              <button onClick={()=> {
                console.log(info);
             }} >click to log info</button>
             <div>Please open console and check</div>
             {info ? "info has been taken" : "error try another url"}
        </div>
    )
}
export default Fetch