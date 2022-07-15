function solveEquation(a, b, c) {
  "use strict"; 
  
  let arr = [];
  let d = b**2-4*a*c;
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d))/(2*a);
    let x2 = (-b - Math.sqrt(d))/(2*a);
    arr.push(x1, x2);
  } else if (d === 0) {
      let x1 = -b/(2*a);
      arr.push(x1);
  }
  console.log(arr);
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";  
  if ((checkNumber('процент', percent) === true) && (checkNumber('первый взнос', contribution) === true) && (checkNumber('сумма', amount) === true)) {  
    let today = new Date();
    let countMonth = (date.getFullYear() - today.getFullYear()) * 12 + (date.getMonth() - today.getMonth());
    let P = (percent / 12) / 100;
    let S = amount - contribution;
    let totalAmount = (countMonth * (S * ( P + P / ((( 1 + P ) ** countMonth) - 1 )))).toFixed(2);
  
    console.log(totalAmount);

    return Number(totalAmount);
  }  
}
