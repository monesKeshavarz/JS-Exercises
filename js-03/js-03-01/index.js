const leftOperand = +prompt("Please enter the left operand");
const operator = prompt("Please enter the operator");
const rightOperand = +prompt("Please enter the right operand");

function answer(leftOperand, operator, rightOperand) {
  if (!isNaN(leftOperand + rightOperand)) {
    switch (operator) {
      case "+":

        return   `${leftOperand} + ${rightOperand} = ${leftOperand + rightOperand}`

      case "-":
        return   `${leftOperand} - ${rightOperand} = ${leftOperand - rightOperand}`

      case "*":
      return   `${leftOperand} * ${rightOperand} = ${leftOperand * rightOperand}`

      case "/":
        return   `${leftOperand} / ${rightOperand} = ${leftOperand / rightOperand}`

      case "%":
        return   `${leftOperand} % ${rightOperand} = ${leftOperand % rightOperand}`

      default:
       console.log("ERROR🙄");
        break;
    }
  }else{console.log("not a number");}
}

 console.log(answer(leftOperand, operator, rightOperand));