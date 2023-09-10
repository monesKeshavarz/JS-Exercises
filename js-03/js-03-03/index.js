const number1 = +prompt("Please enter the number1");
const number2 = +prompt("Please enter the number2");
const number3 = +prompt("Please enter the number3");
const number4 = +prompt("Please enter the number4");
const number5 = +prompt("Please enter the number5");

function avg(number1,number2,number3,number4,number5) {
    const sum = number1+number2+number3+number4+number5;
    return sum/5
}
const average = avg(number1,number2,number3,number4,number5);
if(average<12){
    console.log(`The average obtained is less than twelve`)
}else{
    console.log(`Average obtained = ${average}`)
}