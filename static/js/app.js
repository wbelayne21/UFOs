// importing data from data.js
const tableData = data;
// reference html table using D3
var tbody = d3.select('tbody');


// building a table
function buildTable(data){
    tbody.html("");                              // to reference the table by directing JS to html table ("") to clear
    data.forEach((dataRow)=> {
        let row = tbody.append("tr")             //append row to table body
        Object.values(dataRow).forEach((val)=>{  // loop through each fieldin the dataRow then add each value to table cell
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick(){
    // Grab the datetime value from the filter
    let date= d3.select("#datetime").property("value");
    let filteredData= tableData;
    
    //check if date was entered and filter that data using that date
    if (date){
        // apply filter to the table data to only keep the rows 
        // where the `datetime` value matches the filter value
        filteredData= filteredData.filter(row=>row.datetime===date);
    };    
    
    // rebuild the table using the filtered data, if no date entered it will resort to original data
    buildTable(filteredData);
}
// click event listener
d3.selectAll("#filter-btn").on("click", handleClick);

//build table when page loads
buildTable(tableData);




