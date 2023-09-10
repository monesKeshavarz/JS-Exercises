const leftOperand = +prompt("Please enter the left operand");
const operator = prompt("Please enter the operator");
const rightOperand = +prompt("Please enter the right operand");

if (!isNaN(leftOperand + rightOperand)) {
  if (operator === "+") {
    console.log(`${leftOperand} + ${rightOperand} = ${leftOperand + rightOperand}`);
  }else  if (operator === "-") {
    console.log(`${leftOperand} - ${rightOperand} = ${leftOperand - rightOperand}`);
  }else  if (operator === "*") {
    console.log(`${leftOperand} * ${rightOperand} = ${leftOperand * rightOperand}`);
  }else  if (operator === "/") {
    console.log(`${leftOperand} / ${rightOperand} = ${leftOperand / rightOperand}`);
  }else if (operator === "%") {
    console.log(`${leftOperand} % ${rightOperand} = ${leftOperand % rightOperand}`);
  }
} else {
  console.log("error");
}