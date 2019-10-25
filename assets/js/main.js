queue()
  .defer(d3.csv, "data/BTCData.csv")
  .await(makeDataViz);
  
console.log("Just before the makeData function");
function makeDataViz(error, coinData) {
  console.log("Just inside the makeData function");
}
console.log("Just outside the makeData function");
