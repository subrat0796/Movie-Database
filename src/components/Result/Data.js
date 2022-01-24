import React from "react";

function Data({ result, openPopup }) {
  return (
    <div className="result" onClick={() => openPopup(result.imdbID)}>
      <img src={result.Poster} alt="movie app" />
      <h3>{result.Title}</h3>
    </div>
  );
}

export default Data;
