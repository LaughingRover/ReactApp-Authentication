// import logo from './logo.svg';
import './App.css';
// import UseEffect from './components/UseEffect.jsx'
import  useLocalStorage from './components/input.jsx'

function App() {
  const [value, setValue] = useLocalStorage('name', 'Kwame')

  return (
    <div className="App">

      <h1>Custom Hook</h1>
      {/* <input type="text" value={value} onChange=setValue. /> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <UseEffect /> */}
    </div>
  );
}

export default App;

// function Greet() {
//   return <h1>Hello, Jay</h1>
// } export default Greet;