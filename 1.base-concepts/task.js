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
  let totalAmount;

  if (isNaN(percent)) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);  
  }

  if (isNaN(contribution)) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);  
  }

  if (isNaN(amount)) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);  
  }

  let creditAmount = amount - contribution;
  let today = new Date(); 
  let months = ((date.getMonth() - today.getMonth()) + ((date.getFullYear() - today.getFullYear()) * 12));
  let rate = percent / 12 / 100; //1/12 процентной ставки
  let monthly = creditAmount * (rate + (rate / (((1 + rate) ** months) - 1))); //расчет ежемесячной оплаты
  totalAmount = +(monthly * months).toFixed(2); 
  
  console.log(totalAmount);

  return totalAmount;
}