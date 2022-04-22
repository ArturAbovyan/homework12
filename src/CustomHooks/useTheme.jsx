import {createContext, useState, useContext, useEffect } from "react";
 function useTheme(theme){
    const [userTheme,setUserTheme] = useState();
    const [className,setClassName] = useState("");
    
    if(!userTheme){
        setUserTheme(theme);
    }
            const setTheme = () => {
              const nodeList= document.querySelectorAll(`.${className}`);
              for(let i = 0; i < nodeList.length; i++){
                for (const key in userTheme) {
                nodeList[i].style.setProperty(`${key}`, userTheme[key]);
                } 
              }
            }
    return [setUserTheme,setClassName,setTheme,userTheme]; 
     }
     export default useTheme;
