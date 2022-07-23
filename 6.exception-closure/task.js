//Задача №1. Форматтер чисел

parseCount = (value) => { 
    let result = Number.parseInt(value)
    if (Number.isNaN(result)) {
      throw new Error("Невалидное значение") 
    }  
    return result;
  };
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }
  
 //задача 2
class Triangle {
    constructor(a, b, c) {
        if (a + b < c || c + b < a || a + c < b) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +(area).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getArea: () => "Ошибка! Треугольник не существует",
            getPerimeter: () => "Ошибка! Треугольник не существует"
        }
    }
}
  