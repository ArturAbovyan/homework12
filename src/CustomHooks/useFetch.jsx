import { useState,useEffect } from "react";
function useFetch (url){
  const [userUrl, setUserUrl] = useState();
  useEffect(()=>{
    if(!userUrl){
      setUserUrl(url)
    }
  },[])
  
  const [info, setInfo] = useState();
  useEffect(()=>{
    fetch(`${userUrl}`).then(res => res.json())
    .then(el => {
      setInfo(el);
    })
  })
  return [setUserUrl, info];
}
export default useFetch;