import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navigation/Navbar.js';
import SoloSection from './SoloSection'
import TeamSection from './TeamSection'
import FilterSection from './FilterSection'
import './App.css';
import './index.css';

const team1 = {
  "Name" : "Team Apples",
  "ID" : "12345",
  "Intro" : "A little short description to introduce our team."
}
const team2 = {
  "Name" : "Team Oranges",
  "ID" : "23456",
  "Intro" : "A little short description to introduce our team."
}
const team3 = {
  "Name" : "Team Pears",
  "ID" : "34567",
  "Intro" : "A little short description to introduce our team."
}

function App() {
  return (
    <div className="App">
      <div><Navbar /></div>
      <div className="Container">
        <div className="rowDiv">
          <FilterSection />
          <div className="TeamSolo">
            <h1>Match with another team</h1>
            <TeamSection team1 = {team1}/>
            <TeamSection team1 = {team2}/>
            <TeamSection team1 = {team3}/>
            <SoloSection />
          </div>

        </div>


      </div>
    </div>
  );
}

export default App;
