import useTheme from '../CustomHooks/useTheme';
import { useEffect } from 'react';
function Theme() {
    const [setUserTheme,setClassName,setTheme] = useTheme({
        "background-color": "green",
        "width" : "15%",
        "fontSize": "14px",
        "border-radius": "4px",
        "button-border": "none",
        "color": "#FFF",
        "button-background-color": "#6772e5",
        "button-hover-border": "none",
        "button-hover-color": "#FFF",
      });
      const [setBackGroundLight,setName,setLight, theme] = useTheme({})
      useEffect(()=>{
        setClassName("hookChanged")
        setBackGroundLight({
          'background-color' : "black",
          'color' : "white"
        })
        setName("body")
      },[])
     const handleThemeChoose = ()=>{
      setTheme(); 
    }
    
    const handleLightChoose = ()=>{
      setLight();
      for (const key in theme) {
        if (key === "background-color"){
        if (theme[key] === "black"){
          setBackGroundLight({
            "background-color": "white",
            "color" : "black"
          })
        }
        else setBackGroundLight({
          "background-color": "black",
          "color" : "white"
        })
      }
      }
    }
      return (
        <div>
            <label htmlFor="themeSwitch" style={{
              fontSize: "30px"
            }}>Night/Light</label>
            <input type="checkbox" name="themeSwitch" id="themeSwitch" onChange={handleLightChoose} style={{
              width:"30px",
              height:"30px"
            }}/><br />
            <button onClick={handleThemeChoose} style={{
              width:"10%",
              height:"30px"
            }}>Set Theme</button>
        </div>
      )
}
export default Theme