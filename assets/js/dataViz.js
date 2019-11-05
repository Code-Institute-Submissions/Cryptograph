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
    });

//User-defined data
const numOfBTC = 1;
const dateOfPurchase = new Date("2018-04-01");
const costPerCoin = 4000; //Amount per coin in $
const roiTarget = 350; //Target profit level - 350% ROI of initial value

//Create a crossfilter object
var ndx = crossfilter(data);

var dateDimension = ndx.dimension(function(d){ return d.Date;});
var dateGroup = dateDimension.group().reduceSum(function(d){return d.High});
var maxDate = dateDimension.top(1)[0].Date;
var minDate = dateDimension.bottom(1)[0].Date;

var volGroup = dateDimension.group().reduceSum(function(d){return d.Volume_BTC;});

var profitDateDimension = dateDimension.filterRange([dateOfPurchase, maxDate]);
var profitGroup = profitDateDimension.group().reduceSum(function(d){
                    return Math.floor( ((d.High - costPerCoin) / costPerCoin)  * 100 )});

var scatterDimension = ndx.dimension(function(d){ return[d.Volume_BTC, d.High];});
var scatterGroup = scatterDimension.group();

var coinOverview = dc.lineChart("#data")
                    .width(1200)
                    .height(600)
                    .margins({top:50,bottom:50,right:50,left:50})
                    .dimension(dateDimension)
                    .group(dateGroup)
                    .renderArea(true)
                    .yAxisLabel("Value/$")
                    .x(d3.scaleTime().domain([minDate ,maxDate]))
                    .colors("#1c9099")
                    .renderHorizontalGridLines(true)
                    .useViewBoxResizing(true);
                    dc.renderAll();

var dataTable = dc.dataTable("#table")
                .width(500)
                .height(400)
                .dimension(dateDimension)
                .group(function(d){ return d;})
                .showGroups(false)
                .order(d3.descending)
                .size(5)
                .columns([{label:'Date', format:function(d){
                    return d.Date.toDateString();}}, 
                        'Open', 
                        'Close', 
                        'High', 
                        'Low'])
                .useViewBoxResizing(true);

                dc.renderAll();

var profitGraph = dc.lineChart('#profitData')
                    .height(300)
                    .width(500)
                    .brushOn(false)
                    .dimension(dateDimension)
                    .group(profitGroup)
                    .x(d3.scaleTime().domain([dateOfPurchase, maxDate]).nice())
                    .colors("#756bb1")
                    .y(d3.scaleLinear().domain([-100, 400]))
                    .yAxisLabel("Profit levels/%")
                    .renderArea(true)
                    .renderHorizontalGridLines(true)
                    .xyTipsOn(true)
                    .useViewBoxResizing(true);
    
                    profitGraph.xAxis().ticks(4);
                    dc.renderAll();

var volGraph = dc.barChart("#tradeVolume")
                    .height(300)
                    .width(500)
                    .brushOn(false)
                    .rangeChart(coinOverview)
                    .margins({top:50,bottom:50,right:50,left:50})
                    .dimension(dateDimension)
                    .group(volGroup)
                    .x(d3.scaleTime().domain([minDate ,maxDate]).nice())
                    .colors("#91cf60")
                    .yAxisLabel("Volume of BTC/unit coin")
                    .renderHorizontalGridLines(true)
                    .useViewBoxResizing(true);

                    volGraph.xAxis().ticks(4);
                    
                    dc.renderAll();

var volHighScatter = dc.scatterPlot('#volHighScatter')
                    .height(600)
                    .width(600)
                    .margins({top:50,bottom:50,right:50,left:50})
                    .dimension(scatterDimension)
                    .group(scatterGroup)
                    .x(d3.scaleLinear().domain([0, 130000]))
                    .y(d3.scaleLinear().domain([0, 20000]))
                    .xAxisLabel("Volume of BTC traded/unit coin")
                    .yAxisLabel("Intraday High Value/$ per coin")
                    .renderHorizontalGridLines(true)
                    .useViewBoxResizing(true);

                    volHighScatter.xAxis().ticks(6);
                    dc.renderAll();
                    print_filter(scatterGroup);

});//End const data