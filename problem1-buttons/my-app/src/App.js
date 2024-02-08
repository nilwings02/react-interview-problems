import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons';
function App() {
  const bd = {
    "k1":"v1",
    "k2":"v2",
    "k3":"v3",
    "k4":"v4",
    "k5":"v5",
    "k6":"v6",
    "k7":"v7",
    "k8":"v8",

  }
  return (
    <div className="App">
      {/* <h2>Select the Correct State Capital Pair</h2> */}
      <header className="App-header">
      <h2>Select the Correct State Capital Pair</h2>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
        <Buttons buttonData={bd} />
      </header>
      {/* <Buttons buttonData={bd} /> */}
    </div>
  );
}

export default App;
