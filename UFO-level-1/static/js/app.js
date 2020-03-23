// from data.js
var tableData = data;

var tbody = d3.select("tbody");
// console.log(tableData);
function populateTable(data){
    tbody.html("");
data.forEach(function(ufoData){
    // console.log(ufoData);
    var row = tbody.append("tr");
    // console.log(row)
    Object.entries(ufoData).forEach(function([key,value]){
        // console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    
    });
});
};
var button = d3.select("#filter-btn");

button.on("click", function() {
    // console.log(tbody)
    // console.log(row)
//   Select the input element and get the raw HTML node


    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    // console.log(inputElement);
    var filteredData = tableData.filter(date=>date.datetime === inputValue);
    // console.log(filteredData);
    populateTable(filteredData);
//     d3.select("td").text(filteredData);
    
    });

populateTable(tableData);