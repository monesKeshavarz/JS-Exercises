const grade = +prompt("Enter the grade");
function conversion(grade) {
    return 9/5 * grade +32;
}
console.log(`Temperature converted to Fahrenheit is equal to   ${conversion(grade)}`);
document.writeln(`Temperature converted to Fahrenheit is equal to   ${conversion(grade)}`);