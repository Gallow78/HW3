/*
File: Script.JS
GUI Assignment: HW3 Creating an Interactive Dynamic Table
Wesley Gallo,  UMass Lowell Computer Science, Wesley_Gallo@student.uml.edu

Creating an Interactive Dynamic Table
Copyright (c) 2022 by Gallo. All rights reserved. It may be freely copied or 
excerpted for educational purposes with credit to the author.
references: https://developer.mozilla.org/en-US/docs/Web/JavaScript
https://www.w3schools.com/

updated by WG on June 17th, 2022, at 7:30 AM
*/

//Submit button function to gather input
function myFunction() {

    //getElementById(id) method to from submit input to make variables and table to output
    var BeginColumn, EndColumn, BeginRow, EndRow, output, table;

    BeginColumn = document.getElementById("VMin").value;
    EndColumn = document.getElementById("VMax").value;
    BeginRow = document.getElementById("HMin").value;
    EndRow = document.getElementById("HMax").value;
    output = document.getElementById('makeTable');
    table = "";

    //Using the input given we are able to create a multiplicaiton table using variables from above
    //incrementing columns and rows for the table
    for (i = BeginColumn - 1; i <= EndColumn; i++) {
        table += "<tr>";
        for (j = BeginRow; j <= EndRow; j++) {
            if (i == BeginColumn - 1 && j <= BeginRow) {
                table += "<th></th>";
            }
            if (i == BeginColumn - 1) {
                table += "<th>" +j + "</th>";
            } else if (j == BeginRow) {
                table += "<th>" + i+ "</th>";
            } else if (j == EndRow) {
                table += "<td>" + i*(j-1) + "</td>";
                table += "<td>" + i*j + "</td>";
            } else {
                table += "<td>" + i *(j-1) + "</td>";
            }
        }
        table += "</tr>";
    }
    output.innerHTML = table;

}