class Coach {
  constructor(name, specialization, rating) {
    this.name = name;
    this.specialization = specialization;
    this.rating = rating;
  }

  displayInfo() {
    return `Тренер: ${this.name}, Спеціалізація: ${this.specialization}, Рейтинг: ${this.rating}`;
  }
}

const coach1 = new Coach("Літвін Христина", "фітнес", 4.7);
const coach2 = new Coach("Голубова Діана", "йога", 4.9);

const coachesList = document.getElementById("coaches-list");

[coach1, coach2].forEach((coach) => {
  const coachElement = document.createElement("div");
  coachElement.classList.add("coach");
  coachElement.textContent = coach.displayInfo();
  coachesList.appendChild(coachElement);
});
