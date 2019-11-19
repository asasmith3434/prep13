var dataset = [ 45, 15, 15, 25, 10  ]
 

var color = d3.scaleOrdinal(d3.schemeCategory10);


console.log( d3.schemeCategory10)


var pie= d3.pie(dataset);

var w= 400;
var h= 400;

var outerRadius= w/2;
var innerRadius= 0;
var arc = d3.arc()
.innerRadius(innerRadius)
.outerRadius(outerRadius);

var svg= d3.select("svg")
.append("svg")
.attr("width", w)
.attr("height", h);

var arcs = svg.selectAll("g.arc")
.data(pie(dataset))
.enter()
.append("g")
.attr("class", "arc")
.attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

arcs.append("path")
.attr("fill", function( d, i) {
    return color (i);
})
.attr("d", arc)


arcs.append("text")
.attr("transform", function(d) {
    return "translate(" + arc.centroid(d) + ")";
})
.attr("text-anchor", "middle")
.text(function(d){
    return d.value
})



