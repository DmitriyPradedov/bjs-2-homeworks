//Задача №1. Печатное издание

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, _state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = _state;
    this.type = type;
    }
   
  fix() {
    this.state *= 1.5;
  } 

  set state(newState) {
    if (newState < 0) {
      this._state = 0;     
    } 
    else {
      if (newState > 100) {
        this._state = 100;
      } 
      else {
        this._state = newState;  
      }
    }  
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = "magazine";
  }
 }

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = "book";
  }
 }

 class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = "novel";
  }
 }

 class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = "fantastic";
  }
 }

 class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = "detective";
  }
 }

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); 
console.log(sherlock.state); 
sherlock.fix();
console.log(sherlock.state);


// Задача №2. Библиотека

class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    
}


  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
      console.log(`Книга добавлена - ${book.name}`);
    }
    else {
      console.log(`Книга не добавлена - плохое состояние - ${book.name}`);
    }
  }

  findBookBy(type, value) {

    let result = this.books.find((item) => item[type] === value);
    if (result) {
      console.log(`Книга найдена - ${type} - ${value}`);
      return result;
    } else {
      console.log(`Книга не найдена - ${type} - ${value}`);
      return null;
    }

  }

  giveBookByName(bookName) {
    let position;

    let result = this.books.find(function(item, index) { 
      position = index;
      return item.name === bookName;
    });

    if (result) {
      this.books.splice(position, 1);
      return result;
    } else {
      return null;
    }


  }
}
const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new Magazine("Смешарики", 1980, 30));

console.log(library.findBookBy("name", "Властелин колец")); 
console.log(library.findBookBy("name", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе")); 
console.log(library.findBookBy("releaseDate", 1924)); 

library.addBook(new NovelBook(" Стефан Цвейг", "Случай на Женевском озере", 1919, 120, 80));
console.log(library.findBookBy("releaseDate", 1919)); 
console.log(library.findBookBy("releaseDate", 1919).state); 
library.findBookBy("releaseDate", 1919).fix();
console.log(library.findBookBy("releaseDate", 1919).state); 

console.log("Количество книг до выдачи: " + library.books.length); 
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); 




//Задача №3. Журнал успеваемости


class Student {
  constructor (name, gender = 'male', age = 18) {
    this.name = name;
    this.gender = gender;
    this.age = age; 
    this.marks = {};
  }

  getName() {
    return this.name;
  }

  addGrade(mark, subject)  {
    
    if(!this.marks[subject]) {
      this.marks[subject] = [];
    }  
    if (mark >= 1 && mark <= 5) {
      this.marks[subject].push(mark);
    }  
    else {
      console.log('Ошибка, оценка должна быть числом от 1 до 5');
    }
  }


  getAverage()  {
    let sum = 0;
    let total = 0;

    for (const key in this.marks) {
      sum = sum + this.getAverageBySubject(key);  
      total++;
    }
    return Number((sum / total).toFixed(1));
  }

  getAverageBySubject(subject) {
    if(this.marks[subject]) {
      let summa = 0;
      this.marks[subject].forEach(element => summa += element);
      return summa / this.marks[subject].length
    }
    else {
      console.log(`Предмет не найден: ${subject}`);
    }
  }
  
  exclude(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }

}

const studentLog = new Student('Олег Никифоров');
studentLog.addGrade(5, 'algebra');
studentLog.addGrade(5, 'algebra');
studentLog.addGrade(5, 'geometry');
studentLog.addGrade(4, 'geometry');
studentLog.addGrade(6, 'geometry'); // "Ошибка, оценка должна быть числом от 1 до 5"
studentLog.getAverageBySubject('algebra'); // Средний балл по предмету algebra 5
studentLog.getAverageBySubject('geometry'); // Средний балл по предмету geometry 4.5
studentLog.getAverageBySubject('biology'); // Несуществующий предмет
studentLog.getAverage(); // Средний балл по всем предметам 4.75
studentLog.exclude('Исключен за попытку подделать оценки');