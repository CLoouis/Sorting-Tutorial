import React from "react";
import "./styles/style-sort.css";

const BubleSort = ({ data, nav, handleNext, handlePrev }) => {
  return (
    <div className="sort-wrapper">
      {/* Menampilkank langkah */}
      {data[nav.active] && <h4 className="steps">Step - {nav.steps}</h4>}

      {/* Jika proses sorting selesai */}
      {data[nav.active] && data[nav.active] === data[data.length - 1] ? (
        <div className="last-step">
          <h5>Done!</h5>
          <p>The numbers have been sorted in ascending order.</p>
        </div>
      ) : (
        ""
      )}

      {/* mapping data */}
      <div className="data-number">
        {data[nav.active] &&
          data[nav.active].map((items, idx) => (
            <div className="items-number" key={idx}>
              {items}
            </div>
          ))}
      </div>

      {/* navigator */}
      <div className="nav-button">
        {nav.active > 0 && <button onClick={handlePrev}>Prev</button>}
        {data[nav.active]
          ? nav.active < data.length - 1 && (
              <button onClick={handleNext}>Next</button>
            )
          : ""}
      </div>
    </div>
  );
};

export default BubleSort;
