const data = d3.csv("assets/data/Binance_BTC.csv").then(function(data) {

//Used to interegate date 
function print_filter(filter) {
var f=eval(filter);
if (typeof(f.length) != "undefined") {}else{}
if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
}
//Formats the data from the .csv file so that Date can be used at a JS Date object
var formatData = data.forEach(function(d){
    var tempDate = new Date(d.Date);
    d.Date = tempDate;
    console.log(tempDate);
});

//Create a crossfilter object
var ndx = crossfilter(data);

//var typeDimension = data.dimension(function(d){return d.type;});
var dateDimension = ndx.dimension(function(d){ return d.Date;});
//print_filter('dateDimension');
var dateGroup = dateDimension.group();
print_filter('dateGroup.reduceSum(function(d){return d.Close})');

var maxDate = dateDimension.top(1)[0].Date;
var minDate = dateDimension.bottom(1)[0].Date;
console.log('data.groupAll.reduceValue.value: ' + ndx.groupAll().reduceCount().value());//row count and default function of CF

var coinOverview = dc.lineChart("#data")
                    .width(1200)
                    .height(600)
                    .margins({top:50,bottom:50,right:50,left:50})
                    .dimension(dateDimension)
                    .group(dateGroup)
                    .renderArea(true)
                    .x(d3.scaleTime().domain([minDate ,maxDate]))
                    .colors(d3.schemePastel1)
                    .renderHorizontalGridLines(true)
                    .useViewBoxResizing(true);
                    dc.renderAll();
//var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var dataTable = dc.dataTable("#table")
                .width(400)
                .height(400)
                .dimension(dateDimension)
                .group(function(d){ return d;})
                .showGroups(false)
                .order(d3.descending)
                .size(3)
                .columns([{label:'Date', format:function(d){
                    return d.Date;}}, 
                        'Open', 
                        'Close', 
                        'High', 
                        'Low'])
                .useViewBoxResizing(true)
                .on("renderlet", function(table){
                    table.selectAll('.dc-table-group').classed('info', true);
                });

                dc.renderAll();


});//End const data