function sum(num1, num2) {
  return num1 + num2;
}

function printSum(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(printSum(10, 1, sum));

//Callback Ej2

function date(callback) {
  console.log(new Date);
  setTimeout(()=>{
    let date = new Date;
    callback(date);
  },3000);

}

function printDate(date){
  console.log(date);
}

date(printDate);
