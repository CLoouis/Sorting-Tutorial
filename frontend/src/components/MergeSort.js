import React from "react";
import "./styles/style-sort.css";

const MergeSort = ({ data, nav, handleNext, handlePrev }) => {
  return (
    <div className="sort-wrapper">
      {/* Menampilkank langkah */}
      {data[nav.active] && <h4 className="steps">Step {nav.steps}</h4>}

      {/* Proses merge sorting  */}
      {(data[nav.active] && nav.active === 0) || nav.active === 1 ? (
        <div className="clue">
          <p>The array will be divided into 2 parts.</p>
          <p>Part {nav.active + 1}</p>
        </div>
      ) : (
        ""
      )}

      {/* Proses Pemisahan angka */}
      {data[nav.active] &&
      nav.active !== 0 &&
      nav.active !== 1 &&
      data[nav.active].length === 1 ? (
        <div class="clue">
          <p>Array splitting for sorting.</p>
        </div>
      ) : (
        ""
      )}

      {/* Proses pengurutan angka */}
      {data[nav.active] &&
      nav.active !== 0 &&
      nav.active !== 1 &&
      nav.active !== data.length - 1 &&
      data[nav.active].length > 1 ? (
        <div class="clue">
          <p>Array sorting</p>
        </div>
      ) : (
        ""
      )}

      {/* Jika proses sorting selesai */}
      {data[nav.active] && nav.active === data.length - 1 && (
        <div class="last-step">
          <h5>Done!</h5>
          <p>The numbers have been sorted in ascending order.</p>
        </div>
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
      <div class="nav-button">
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

export default MergeSort;
