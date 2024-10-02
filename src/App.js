import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React Test Build ID: {process.env.REACT_APP_NETLIFY_BUILD_ID}
          Commit Ref:{process.env.REACT_APP_NETLIFY_COMMIT_REF}
        </a>
      </header>
    </div>
  );
}

export default App;
