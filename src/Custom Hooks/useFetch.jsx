import { useState,useEffect } from "react";
function useFetch (url){

}
function useLocalStorage(key, value) {
    const [localValue, setLocalValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : value;
      } catch (error) {
        console.log(error);
        return value;
      }
    });
    
    const setValue = (value) => {
      try {
        const savedValue = value;
        setLocalValue(savedValue);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(savedValue));
        }
      } catch (error) {
        console.log(error);
      }
    };
    return [localValue, setValue];
  }