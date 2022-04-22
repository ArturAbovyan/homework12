import './App.css';
import  React, { useContext } from "react";
import Theme from './components/theme';
import LocalStorage from './components/localStorage';
import Fetch from './components/fetch';
import ListItem from './components/listItem';
export const listItems = React.createContext('');
function App() {
  return (
    <div className="App">
      <h2>Theme Exercise With Switch Button</h2>
      <Theme/>
      <h1>Local Storage Exercise</h1>
      <LocalStorage/>
      <button className="hookChanged">Button</button>
      <h1>Use Fetch</h1>
      <Fetch/>
      <ListItem/>
      <listItems.Provider>
        </listItems.Provider>
    </div>
  );
}

export default App;

