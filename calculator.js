// Toyin Harris
//Assignment 3
let results = [];

document.write("<table border='1'>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

// Start input loop
while (true) {

    // Promptfor inputs
    let x = prompt("Enter first number:");
    if (x === null) break;
    let y = prompt("Enter second number:");
    if (y === null) break;
    let op = prompt("Enter a operator (+, -, *, /, %):");
    if (op === null) break;
    x = parseFloat(x);
    y = parseFloat(y);
    let result;

    if (isNaN(x) || isNaN(y)) {
        result = "Error:Invalid number";
    } else {
        // Perform operation
        switch (op) {
            case"+": result = x + y; break;
            case"-": result = x - y; break;
            case"*": result = x * y; break;
            case"/": result = y !== 0 ? x / y : "Error: Divide by 0"; break;
            case"%": result = x % y; break;
            default: result = "Error: Invalid operator";
        }

    }
    document.write("<tr><td>" + x + "</td><td>" + op + "</td><td>" + y + "</td><td>" + result + "</td></tr>");

    // Save valid resul to array
    if (typeof result === "number" && !isNaN(result)) {
        results.push(result);
    }
    
}
if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((acc, val) => acc + val, 0);
    let avg = total / results.length;

    // Summaryz
    document.write("<br><h2>Summary</h2>");
    document.write("<table border='1'>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
} else {
    document.write("<p>No valid result to sum.</p>");
}
document.write("</table>");