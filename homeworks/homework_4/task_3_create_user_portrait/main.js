const sportsChampions = {
    футбол: "Ліонель Мессі",
    баскетбол: "Майкл Джордан",
    теніс: "Роджер Федерер"
};
const birthYear = prompt("Будь ласка, введи рік свого народження:");
if (birthYear && !isNaN(birthYear) && Number.isInteger(Number(birthYear)) && birthYear.length === 4 && birthYear <= 2025) {
    const city = prompt("В якому місті ти живеш?");
    if (city) {
        const favoriteSport = prompt("Який твій улюблений вид спорту?");
        if (favoriteSport) {
            const currentYear = new Date().getFullYear();
            const age = currentYear - birthYear;
            let cityMessage;
            if (city.toLowerCase() === "київ") {
                cityMessage = "Ти живеш у столиці України.";
            } 
            else if (city.toLowerCase() === "вашингтон") {
                cityMessage = "Ти живеш у столиці США.";
            } 
            else if (city.toLowerCase() === "лондон") {
                cityMessage = "Ти живеш у столиці Великої Британії.";
            } 
            else {
                cityMessage = "Ти живеш у місті" + city + ".";
            }
            let sportMessage;
            const sportKey = favoriteSport.toLowerCase();
            if (sportsChampions[sportKey]) {
                sportMessage = "Круто! Хочеш стати як " + sportsChampions[sportKey] + "?";
            } 
            else {
                sportMessage = "Твій улюблений вид спорту: " + favoriteSport;
            }
            alert("Твій вік: " + age + "\n" + cityMessage + "\n" + sportMessage);
        } 
        else {
            alert("Шкода, що ти не захотів ввести свій улюблений вид спорту.");
        }
    } 
    else {
        alert("Шкода, що ти не захотів ввести своє місто.");
    }
} 
else {
    alert("Шкода, що ти не захотів ввести свій рік народження.");
}