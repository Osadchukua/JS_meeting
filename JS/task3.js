// Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
const time = prompt("количество минут");
// console.log(time);
const hours = Math.floor(time / 60);
// console.log(hours);
const minutes = time % 60;
// console.log(minutes);
const adaptHours = String(hours).padStart(2, 0);
// console.log(adaptHours);
const adaptMinutes = String(minutes).padStart(2, 0);
const clock = `${adaptHours} : ${adaptMinutes}`;
console.log(clock);
