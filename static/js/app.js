// YOUR CODE HERE!

// Declare variable
let tbody = d3.select("tbody");

// From data.js
var tableData = data;

// Function to build the table
function buildTable(data){
    // Clear existing data
    tbody.html("");

    // Loop through the data
    data.forEach((dataRow) => {

        // Append table row "tr" to the table body "tbody"
        let row = tbody.append("tr");

        // Object.values & forEach to iterate
        Object.values(dataRow).forEach((val) => {
            // Append a cell to the row for each value
            let cell = row.append("td");
            cell.text(val);
        });
    })
}

// Event that triggers a function when the button is clicked
function handleClick(){

    // Prevents the page from refreshing
    d3.event.preventDefault();

    // Select HTML input element & get the value property of that input element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check if a date was entered & filter the data using that date;
    // Apply Filter to the table data to only keep rows where the the datetime is a match
    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }
        // Build table with filtered data
        buildTable(filterData);
}

// On function to attach an event to the handler function
d3.selectAll("#filter-btn").on("click", handleClick);

// Build table with data.js 
buildTable(tableData);
