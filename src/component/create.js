import React from 'react';
import './Sorting.css';
import * as d3 from 'd3';
import './Main.js';
function create(props) {
    var myContent = document.getElementById("myContent");
    while (myContent.firstChild) {
        myContent.lastChild.remove();
    }

    num = props.data.Number;
    el = props.data.elements.value;
    elarray = el.split(",").map(v => Number(v));

    count = 1 + num;
    durationTime = 20000 / count;
    array = elarray;
    unsortedArray = [...array];
    sortedArray = [];
    stop = false;
    steps = 0;
    margin = { top: 40, right: 40, bottom: 180, left: 40 };
    width = 500 - margin.left - margin.right;
    height = 3000 - margin.top - margin.bottom;

    barWidth = width / count;

    x = d3.scaleLinear()
        .domain([0, count])
        .range([0, width]);

    svg = d3.select("#myContent").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    rects = svg.append("g")
        .attr("transform", "translate(" + barWidth + ",2)")
        .selectAll("rect")
        .data(unsortedArray)
        .enter().append("rect")

    labels = svg.selectAll("text")
        .data(unsortedArray)
        .enter().append("text")

    labels.attr("id", function (d) { return "text" + d })
        .attr("transform", function (d, i) { return "translate(" + x(i) + ",0)" })
        .html(function (d) { return d; })

    rects.attr("id", function (d) { return "rect" + d })
        .attr("transform", function (d, i) { return "translate(" + (x(i) - barWidth) + ",0)" })
        .attr("width", barWidth * .9)
        .attr("height", function (d) { return d * barWidth / 3 })

    reset();
}
export default create