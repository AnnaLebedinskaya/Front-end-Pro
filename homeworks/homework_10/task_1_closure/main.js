const user = {
  name: "Anna",
  age: 30,
  location: "Berlin",

  getInfo() {
    console.log(
      `Тебе звати ${this.name}, тобі ${this.age} років, ти проживаєш у місті ${this.location}`
    );
  },
};

user.getInfo();
