import React from "react";
import { Link } from "react-router-dom";

import "../components/styles/style.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>
              <span>Sorting </span>
              Tutorial
            </h1>
            <br></br>
            <br></br>
            <h3>A visualizer tool to help you understand how the sorting algorithms work.</h3>
          </div>
          <main>
            <div className="items">
              <Link to="/sorting/bubble">
                <div className="data-items">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWdvztp-xqcjYqZDwoxsCOF9njOYu_Qo9TNLAfZzBSZOAS7nEh&usqp=CAU"
                    alt="img-sorting"
                  />
                  <h3>Bubble Sort Algorithm</h3>
                  <ul>
                    <li>Sort</li>
                  </ul>
                </div>
              </Link>
              <Link to="/sorting/merge">
                <div className="data-items">
                  <img
                    src="https://image.shutterstock.com/image-vector/bent-arrow-two-black-white-260nw-1549402526.jpg"
                    alt="img-sorting"
                  />
                  <h3>Merge Sort Algorithm</h3>
                  <ul>
                    <li>Sort</li>
                  </ul>
                </div>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
