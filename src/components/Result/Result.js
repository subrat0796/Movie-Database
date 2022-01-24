import React from "react";
import Data from "./Data";

function Result({ results, openPopup }) {
  console.log(results, openPopup);
  return (
    <section className="results">
      {results.map((result) => {
        return <Data result={result} key={result.imdbID} openPopup={openPopup} />;
      })}
    </section>
  );
}

export default Result;
