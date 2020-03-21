// from data.js
var tableData = data;

// YOUR CODE HERE!
// Add all the data table info to the website
var tbody=d3.select("tbody");
// Text print the dataset by console log it out 
console.log(tableData);

// loop through the data set and console.log each ufo info
tableData.forEach(function(ufoData){
  console.log(ufoData);
  // declear the table row
  var row=tbody.append("tr");
  // use "object.entries" to console.log each weather report value
  Object.entries(ufoData).forEach(function([key,value]){
    console.log(key,value);
    //Append a cell to the row for each value
    var cell=row.append("td");
    cell.text(value);
  });
});

// Add on click function for button 
// select button from html file
var button = d3.select("#filter-btn");
var inputElement=d3.select("#datetime");
button.on("click",function(){
  console.log(`Just clicked a button`);

  var inputValue=inputElement.property("value");
  console.log(inputValue);
  console.log(tableData);

  var filteredData=tableData.filter(ufoData => ufoData.datetime===inputValue);
  console.log(filteredData);
  
  // Print the filtered date to the table on website
  var tableRow=d3.selectAll('td')
  // remove the existing data table
  tableRow.remove();
  // console log check the table
  console.log(tableRow);

  // use for each to go through all the datatable to filter by the date time
  filteredData.forEach(function(item) {
    console.log(item);
    var row = tbody.append("tr");
    Object.entries(item).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
  });
});

//  