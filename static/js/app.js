console.log("Page was reloaded")

var filterDate = d3.select("#filter-btn-date");
var filterCity = d3.select("#filter-btn-city");
var filterState = d3.select("#filter-btn-state");
var filterCountry = d3.select("#filter-btn-country");
var filterShape = d3.select("#filter-btn-shape");
var resetData = d3.select("#reset-btn");

function printTable() {
    for (var i=0; i<data.length; i++) {
        var tbody = d3.select("tbody");
        var row = tbody.append("tr");
        row.append("td").text(data[i].datetime);
        row.append("td").text(data[i].city);
        row.append("td").text(data[i].state);
        row.append("td").text(data[i].country);
        row.append("td").text(data[i].shape);
        row.append("td").text(data[i].durationMinutes);
        row.append("td").text(data[i].comments);
    }
}

function updateTable(cell) {
    var textElement = d3.select("#filter-text");
    var textToFilter = textElement.property("value");
    if (Object.keys(textToFilter).length) {
        console.log(textToFilter);
    }
    else {
        console.log("No input");
        window.alert("'Enter Text' box is empty!");
        return;
    }
    var table = document.getElementById("ufo-table");
    var doUpdate = false;
    for (var r=1; r<table.rows.length; r++) {
        var text = table.rows[r].cells.item(cell).innerHTML;
        if (text==textToFilter) {
            doUpdate = true;
            break;
        } 
    }
    if (!doUpdate) {
        window.alert("Text was not found - try again!");
        return;
    }
    for (var r=table.rows.length-1; r>0; r--) {
        var text = table.rows[r].cells.item(cell).innerHTML;
        if (text!=textToFilter) table.deleteRow(r);
    }
}

function clearTable() {
    var table = document.getElementById("ufo-table");
    for (var r=table.rows.length-1; r>0; r--) table.deleteRow(r);
}

filterDate.on("click", function() {
    d3.event.preventDefault();
    console.log("'Filter Date' was clicked");
    updateTable(0);
});

filterCity.on("click", function() {
    d3.event.preventDefault();
    console.log("'Filter City' was clicked");
    updateTable(1);
});

filterState.on("click", function() {
    d3.event.preventDefault();
    console.log("'Filter State' was clicked");
    updateTable(2);
});

filterCountry.on("click", function() {
    d3.event.preventDefault();
    console.log("'Filter Country' was clicked");
    updateTable(3);
});

filterShape.on("click", function() {
    d3.event.preventDefault();
    console.log("'Filter Shape' was clicked");
    updateTable(4);
});

resetData.on("click", function() {
    d3.event.preventDefault();
    console.log("'Reset' was clicked");
    clearTable();
    printTable();
});

printTable();