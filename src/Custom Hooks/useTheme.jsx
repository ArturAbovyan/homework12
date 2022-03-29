import {useState } from "react";
 function useTheme(theme){
    const [userTheme,setUserTheme] = useState()
    const [className,setClassName] = useState("")
    if(!userTheme){
        setUserTheme(theme)
    }
            const setTheme = () => {
            for (const key in userTheme) {
             document.querySelector(`.${className}`).style.setProperty(`${key}`, userTheme[key]);
              }
            };
        
    return [setUserTheme,setClassName,setTheme]    
     }
    export default useTheme