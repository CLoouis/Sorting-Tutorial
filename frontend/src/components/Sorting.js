import React, { useState } from "react";
import axios from "axios";

import BubbleSort from "../components/BubleSort";
import MergeSort from "../components/MergeSort";

const Sorting = ({ match }) => {
  // URL API backend
  const URL_API = `${process.env.HOST ? process.env.HOST : ""}/sorting`;

  // Inisialisasi State
  const mode = match.params.kategori;
  const [inputAngka, setInputAngka] = useState("");
  const [notif, setNotif] = useState({
    status: false,
    message: null,
  });
  const [resultBubble, setResultBubble] = useState([]);
  const [resultMerge, setResultMerge] = useState([]);

  // navigator hasil sorting
  const [nav, setNav] = useState({
    active: 0,
    steps: 1,
  });

  // Handle input
  const handleInput = (e) => {
    setInputAngka(e.target.value);
  };

  // Handle Reset semuanya
  const handleReset = () => {
    setResultBubble([]);
    setResultMerge([]);
  };

  // Handle ketika di submit
  const handleSubmitAngka = (e) => {
    e.preventDefault();
    // Jika menginputkan tidak menggunakan ","
    if (!inputAngka.includes(",")) {
      // set Notifikasi error
      setNotif({
        status: true,
        message: "Type ',' as a separator.",
      });
    }
    // Jika Akhiran / Awalan Inputan megguakan ","
    if (
      inputAngka.indexOf(",", 0) === 0 ||
      inputAngka.lastIndexOf(",") + 1 === inputAngka.length
    ) {
      // set Notifikasi error
      setNotif({
        status: true,
        message: "Type ',' correctly.",
      });
    }

    // Call to API
    const data = inputAngka.split(",");
    let fixData = [];

    // parse from STRING to INTEGER
    data.map((x) => {
      return fixData.push(parseInt(x, 10));
    });

    // jika jum angka lebih dari 10
    if (fixData.length > 10) {
      // set Notifikasi error
      return setNotif({
        status: true,
        message: "Maximum input number is 10",
      });
    }

    // Pilih Mode Sorting
    if (mode === "bubble") {
      // Panggil fungsi bubble sorting
      bubbleSorting(fixData);
    } else {
      // Panggil fungsi merge sorting
      mergeSorting(fixData);
    }

    // Setting Default
    setNav({
      active: 0,
      steps: 1,
    });
    setInputAngka([]);
    setResultBubble([]);
    setResultMerge([]);
    // Set hidden notifikasi
    setTimeout(() => {
      setNotif({
        status: false,
        message: null,
      });
    }, 2000);
  };

  // Fungsi Bubble Sorting
  const bubbleSorting = async (data) => {
    // Response dari call API
    const response = await axios.post(`${URL_API}/bubble-sort`, {
      angka: data,
    });
    // Result response call API
    const res = response.data.result;
    let fixResponseData = [];

    // Handle untuk duplicate result
    for (let i = 0; i < res.length; i++) {
      let element = res[i];
      if (JSON.stringify(element) === JSON.stringify(res[i + 1])) {
        res.splice(0, i, res[i + 1]);
      }
      fixResponseData.push(element);
    }

    // Set State Bubble Sort
    setResultBubble(fixResponseData);
  };

  // Fungsi Merge Sorting
  const mergeSorting = async (data) => {
    const response = await axios.post(`${URL_API}/merge-sort`, {
      angka: data,
    });
    // Set State Merge Sorting
    setResultMerge(response.data.result);
  };

  // untuk navigasi hasil sorting
  const handleNext = () => {
    setNav({ active: nav.active + 1, steps: nav.steps + 1 });
  };

  const handlePrev = () => {
    setNav({ active: nav.active - 1, steps: nav.steps - 1 });
  };

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>
              <span className="title-mode">{mode}</span>Sort
            </h1>
            {mode === "bubble" ? (
              <div className="title-content">
                <h3>What actually is Bubble Sort?</h3>
                <br></br>
                <p>
                  Bubble Sort is the simplest sorting algorithm that works by
                  repeatedly swapping the adjacent elements if they are in wrong
                  order.
                  <br></br>
                  <br /> Bubble Sort has a time complexity of O(n^2)
                </p>
              </div>
            ) : (
              <div className="title-content">
                <h3>What actually is Merge Sort?</h3>
                <br></br>
                <p>
                  Merge Sort is a Divide and Conquer algorithm. It divides input
                  array in two halves, calls itself for the two halves and then
                  merges the two sorted halves.
                  <br></br>
                  <br /> Merge Sort has a time complexity of O(n log n)
                </p>
              </div>
            )}
          </div>
          <main>
            {/* Show Notification */}
            {notif.status && <p className="notif-message">{notif.message}</p>}
            <div className="form-input">
              <form onSubmit={handleSubmitAngka} method="POST">
                <input
                  type="text"
                  id="angka"
                  placeholder="type numbers( e.g.: 2,4,8,1 )"
                  onChange={handleInput}
                  autoComplete="off"
                  required
                />
                <button
                  className="btn-reset"
                  onClick={handleReset}
                  type="reset"
                >
                  Reset
                </button>
                <button className="btn-sorting" type="submit">
                  Sort
                </button>
              </form>
            </div>
            {mode === "bubble" ? (
              <BubbleSort
                data={resultBubble}
                nav={nav}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            ) : (
              <MergeSort
                data={resultMerge}
                nav={nav}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
