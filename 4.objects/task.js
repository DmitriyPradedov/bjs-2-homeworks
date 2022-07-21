
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
let student1 = new Student("Tony", "male", 37);
let student2 = new Student("Mark", "male", 41);
let student3 = new Student("Mary", "female", 33);

Student.prototype.setSubject = function (subjectName) {
 this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
      this.marks.push(mark);
  }
};

 Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){
    this.marks = [...mark];
    } else {
      this.marks.push(...mark);
    }
 };

 Student.prototype.getAverage = function () {
   return this.marks.reduce((acc, mark, index) => {
    acc +=mark;
    if(index === this.marks.length - 1) {
      return acc / this.marks.length;
    }
    return acc;
   });
 };

 Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
  return this;
 };