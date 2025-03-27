class Student {
  constructor(firstName, lastName, birthYear, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
    this.currentAttendanceIndex = 0;
  }

  getAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    return (
      this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length
    );
  }

  present() {
    if (this.currentAttendanceIndex < 25) {
      this.attendance[this.currentAttendanceIndex++] = true;
    } else {
      console.log("Всі відвідування вже відмічені!");
    }
  }

  absent() {
    if (this.currentAttendanceIndex < 25) {
      this.attendance[this.currentAttendanceIndex++] = false;
    } else {
      console.log("Всі відвідування вже відмічені!");
    }
  }

  getAttendanceRate() {
    const validAttendances = this.attendance.filter((val) => val !== null);
    if (validAttendances.length === 0) return 0;
    return (
      validAttendances.filter((val) => val).length / validAttendances.length
    );
  }

  summary() {
    const avgGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceRate();

    if (avgGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (avgGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Жах!";
    }
  }
}

const student1 = new Student("Іван", "Петров", 2002, [95, 92, 88, 91, 97]);
const student2 = new Student("Марія", "Іванова", 2001, [85, 78, 82, 88, 79]);

student1.present();
student1.present();
student1.present();
student1.absent();

student2.present();
student2.absent();
student2.absent();

console.log(
  `${student1.firstName} ${student1.lastName} (Вік: ${student1.getAge()})`
);
console.log(`Середній бал: ${student1.getAverageGrade()}`);
console.log(`Відвідуваність: ${student1.getAttendanceRate().toFixed(2)}`);
console.log(`Оцінка: ${student1.summary()}`);

console.log("\n");

console.log(
  `${student2.firstName} ${student2.lastName} (Вік: ${student2.getAge()})`
);
console.log(`Середній бал: ${student2.getAverageGrade()}`);
console.log(`Відвідуваність: ${student2.getAttendanceRate().toFixed(2)}`);
console.log(`Оцінка: ${student2.summary()}`);
