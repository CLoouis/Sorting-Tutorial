import * as d3 from 'd3';
import React, {useRef, useEffect} from "react";

export default function VisualizeArray({width, height, data}){
    const ref = useRef();
    
    useEffect( () =>{
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            // .style("border", "1px solid black")
    } , [] );

    useEffect( () => {
        drawArr();
    }, [data]);

    const drawArr = () => {
        const svg  = d3.select(ref.current);
        var selection = svg.selectAll("rect").data(data);
        var yScale = d3.scaleLinear()
                            .domain([0, d3.max(data)])
                            .range([0, height-50]);

        selection
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height - yScale(d))

        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) => (i+1) * 45)
            .attr("y", (d) => height)
            .attr("width", 40)
            .attr("height", 0)
            .attr("fill", "cyan")
            .attr("id",function(d) {return "rect"+d})
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height-yScale(d))

        var labels = svg.selectAll("text")
        .data(data)
        .enter().append("text")
        
        labels.attr("id", function (d) { return "text" + d })
            // .attr("transform", function (d, i) { return "translate(" + (i+1)*45 + ","+height-yScale(d)+")" })
            .attr("x",(d,i) => (i+1)*45)
            .attr("y",(d) => height - yScale(d)-5)
            .html(function (d) { return d; })
    
        selection
            .exit()
            .transition().duration(30)
                .attr("y", (d) => height)
                .attr("height", 0)
            .remove()
    }

    return (
        <div className="arr">
            <svg ref={ref}>
            </svg>
        </div>
    )
}