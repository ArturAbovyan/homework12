import { useState } from "react";
function useLocalStorage(key, value) {
    const [localValue, setLocalValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : value;
    });
    const setValue = (value) => {
        setLocalValue(value);
          window.localStorage.setItem(key, JSON.stringify(value));
    };
    const clearValue = () => {
        window.localStorage.removeItem(key);
    };
    const getItem = () => {
        return window.localStorage.getItem(`${key}`)
    };
    return [localValue, setValue, clearValue, getItem];
  }

export default useLocalStorage
