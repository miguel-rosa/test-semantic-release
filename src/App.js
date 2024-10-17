import logo from "./logo.svg";
import "./App.css";
import posthog from "posthog-js";

export const initTracking = function () {
  posthog.init("phc_7fBqYHoSDdTt39dCRdJVMe63GQ5GH89pBjlP3r3IzWk", {
    // api_host: `${process.env.REACT_APP_POSTHOG_HOST}/ingest`,
    api_host: `https://us.i.posthog.com`,
    // api_host: `${window.location.origin}/ingest/`,
    // ui_host: "https://us.posthog.com",
  });
  // }

  posthog.register({
    application: "test-semantic-release",
  });
};

initTracking();

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
          Learn React Build ID:
          {process.env.REACT_APP_NETLIFY_BUILD_ID}
          Commit Ref:
          {process.env.REACT_APP_NETLIFY_COMMIT_REF}
        </a>
      </header>
    </div>
  );
}

export default App;
