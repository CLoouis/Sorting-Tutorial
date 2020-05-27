import React from 'react';
import './Sorting.css';
import './slide.js';
import * as d3 from 'd3';
function reset() {
    unsortedArray = [...array];
    sortedArray = [];
    stop = false;

    d3.select("#counter").html(steps = 0)

    labels.attr("class", "")
        .transition().duration(20)
        .attr("transform", function (d, i) { return "translate(" + (x(i)) + ", 0)" })

    rects.attr("class", "")
        .transition().duration(20)
        .attr("transform", function (d, i) { return "translate(" + (x(i - 1)) + ", 0)" })
}


export default reset();