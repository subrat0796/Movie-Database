import Search from "./components/Search/Search";
import { useState } from "react";
import axios from "axios";
import Result from "./components/Result/Result";
import Popup from "./components/Popup/Popup";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiurl = "http://www.omdbapi.com/?apikey=fdf38a43";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Result results={state.results} openPopup={openPopup} />
        {typeof state.selected.Title != "undefined" ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;
