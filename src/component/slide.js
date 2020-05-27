import React from 'react';
import './Sorting.css';
import * as d3 from 'd3';
function slide(d, i) {
    d3.select("#text" + d)
        .transition().duration(durationTime)
        .attr("transform", function (d) { return "translate(" + (x(i)) + ", 0)" })

    d3.select("#rect" + d)
        .transition().duration(durationTime)
        .attr("transform", function (d) { return "translate(" + (x(i - 1)) + ", 0)" })
}
export default slide(d, i);