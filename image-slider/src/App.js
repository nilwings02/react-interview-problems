import logo from './logo.svg';
import './App.css';
import './Image.css'

import React, { useState } from 'react';
import Images from './images';
import IconButtons from './buttons';

function App() {
  // const [imgLoc, setImgLoc] = useState(0)
  // const images = [
  //   "https://images.theconversation.com/files/287209/original/file-20190807-144847-5o9df4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
  //   "https://media.npr.org/assets/img/2015/09/23/ap_836720500193-13f1674f764e5180cf9f3349cfef258d181f2b32-s900-c85.webp"
  // ]
  // const handleClick = ()=> {

  //   setImgLoc(imgLoc)
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-image">
          <Images />
        </div>
        {/* <IconButtons/> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
