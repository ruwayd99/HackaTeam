import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navigation/Navbar.js';
import SoloSection from './SoloSection'
import TeamSection from './TeamSection'
import FilterSection from './FilterSection'
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <div><Navbar /></div>
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
          Learn React
        </a>
      </header>
      <div className="Container">
        <div className="rowDiv">
          <FilterSection />
          <div className="TeamSolo">
            <TeamSection />
            <SoloSection />
          </div>

        </div>


      </div>
    </div>
  );
}

export default App;
