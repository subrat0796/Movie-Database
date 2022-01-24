import React from "react";

function Popup({ selected, closePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.title} <span>({selected.Year})</span>
        </h2>
        <p className="writing">Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} alt="container" />
          <p>{selected.Plot}</p>
        </div>
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
}

export default Popup;
