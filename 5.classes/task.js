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

const sherlock1 = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock1.releaseDate); 
console.log(sherlock1.state); 
sherlock1.fix();
console.log(sherlock1.state);


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

    let result = this.books.find(function(item, findIndex) { 
      position = findIndex;
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
const library1 = new Library("Библиотека имени Ленина");

library1.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library1.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library1.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library1.addBook(new Magazine("Мурзилка", 1924, 60));
library1.addBook(new Magazine("Смешарики", 1980, 30));

console.log(library1.findBookBy("name", "Властелин колец")); 
console.log(library1.findBookBy("name", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе")); 
console.log(library1.findBookBy("releaseDate", 1924)); 

library1.addBook(new NovelBook(" Стефан Цвейг", "Случай на Женевском озере", 1919, 120, 80));
console.log(library1.findBookBy("releaseDate", 1919)); 
console.log(library1.findBookBy("releaseDate", 1919).state); 
library1.findBookBy("releaseDate", 1919).fix();
console.log(library1.findBookBy("releaseDate", 1919).state); 

console.log("Количество книг до выдачи: " + library1.books.length); 
library1.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library1.books.length); 




//Задача №3. Журнал успеваемости

class Student {
  constructor (name, gender = 'male', age = 18) {
    this.name = name;
    this.gender = gender;
    this.age = age; 
    this.mark = {};
  }

  getName() {
    return this.name;
  }

  addGrade(mark, subject)  {
    
    if(!this.mark[subject]) {
      this.mark[subject] = [];
    }  
    if (mark >= 1 && mark <= 5) {
      this.mark[subject].push(mark);
    }  
    else {
      console.log('Ошибка, оценка должна быть числом от 1 до 5');
    }
  }
  getAverageBySubject(subject) {
    if (this.mark[subject]) {
      let summa = 0;
      this.mark[subject].forEach(element => summa += element);
      return summa / this.mark[subject].length ;
    }

    else {
       console.log(`Несуществующий предмет: ${subject}`);
    }
  }

  getAverage()  {
    let sum = 0;
    let total = 0;

    for (const key in this.mark) {
      sum = sum + this.getAverageBySubject(key);  
      total++;
    }
    console.log ("Средний балл по всем предметам", Number((sum / total).toFixed(2)));
  }

 
  
  exclude(reason) {
    delete this.subject;
    delete this.mark;
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