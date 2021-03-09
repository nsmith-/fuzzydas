import './App.css';
import Autocomplete from "./Autocomplete";

function App() {
  let pd_opts = [];
  let cond_opts = [];
  fetch(`pds.json`)
    .then(response => response.json())
    .then(data => data.forEach((row) => {
      pd_opts.push(row);
    }))
    .then(pd_opts.sort());
  fetch(`conds.json`)
    .then(response => response.json())
    .then(data => data.forEach((row) => {
      cond_opts.push(row);
    }));
  return (
    <div className="App">
      <header className="App Title">
        Fuzzy Dataset Search
      </header>
      <div className="App SearchBar">
        <div className="Sep">/</div>
        <Autocomplete name="primary" options={pd_opts} />
        <div className="Sep">/</div>
        <Autocomplete name="conditions" options={cond_opts} />
        <div className="Sep">/</div>
        <Autocomplete name="datatier" options={["NANOAOD", "NANOAODSIM", "MINIAOD"]} default="NANOAODSIM" />
      </div>
    </div>
  );
}

export default App;
