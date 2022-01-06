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
    